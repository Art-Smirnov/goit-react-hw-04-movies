import React, { Component } from "react";
import { Route } from "react-router-dom";

import fetchAPI from "../../services/fetchAPI";
import MovieList from "../../components/MovieList";

class MoviesPage extends Component {
  state = {
    searchQuery: "",
    movies: [],
  };

  handleChange = (e) => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      path: "search/movie",
      query: this.state.searchQuery,
    };

    const response = await fetchAPI.fetchMovieData(options);
    this.setState({ movies: response });
    this.onQueryChange();
    this.setState({ searchQuery: "" });
  };

  onQueryChange = () => {
    const { history, location } = this.props;
    console.log(history);

    history.push({ pathname: location.pathname, search: `query=${this.state.searchQuery}` });
  };

  render() {
    const { searchQuery, movies } = this.state;
    const { match } = this.props;

    return (
      <>
        <header>
          <form onSubmit={this.handleSubmit}>
            <button type="submit">
              <span>Search</span>
            </button>

            <input
              type="text"
              value={searchQuery}
              onChange={this.handleChange}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
        <Route path={`${match.path}`} render={(props) => <MovieList {...props} movies={movies} />} />
      </>
    );
  }
}

export default MoviesPage;
