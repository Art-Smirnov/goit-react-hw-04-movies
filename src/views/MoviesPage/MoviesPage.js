import React, { Component } from "react";
import queryString from "query-string";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import fetchAPI from "../../services/fetchAPI";
import MovieList from "../../components/MovieList";
import Section from "../../components/Section";

class MoviesPage extends Component {
  state = {
    searchQuery: "",
    movies: [],
    error: null,
  };

  async componentDidMount() {
    const query = this.getQueryFromProps(this.props);
    if (Object.keys(query).length === 0) {
      return;
    }
    const { search } = this.props.location;

    const options = {
      path: "search/movie",
      query: search,
    };

    try {
      const response = await fetchAPI.fetchMovieData(options);
      this.setState({ movies: response });
    } catch (error) {
      this.setState({ error });
    }
  }

  handleChange = (e) => {
    this.setState({ searchQuery: e.currentTarget.value, movies: [], error: null });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      path: "search/movie",
      query: `?query=${this.state.searchQuery}`,
    };

    try {
      const response = await fetchAPI.fetchMovieData(options);
      this.setState({ movies: response });
      this.onQueryChange();
    } catch (error) {
      this.setState({ error });
    }
    this.setState({ searchQuery: "" });
  };

  onQueryChange = () => {
    const { history, location } = this.props;

    history.push({ pathname: location.pathname, search: `query=${this.state.searchQuery}` });
  };

  getQueryFromProps = (props) => queryString.parse(props.location.search);

  render() {
    const { searchQuery, movies, error } = this.state;

    return (
      <Section>
        <form onSubmit={this.handleSubmit}>
          <TextField
            type="search"
            value={searchQuery}
            onChange={this.handleChange}
            autoComplete="off"
            placeholder="Search movies"
          />
          <Button size="small" variant="contained" color="primary" type="submit">
            Search
          </Button>
        </form>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {movies.length > 0 && <MovieList movies={movies} />}
      </Section>
    );
  }
}

export default MoviesPage;
