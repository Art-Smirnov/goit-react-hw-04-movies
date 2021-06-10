import React, { Component } from "react";
import { Route } from "react-router-dom";

import fetchAPI from "../../services/fetchAPI";
import Query from "../../components/Query";

class MoviesPage extends Component {
  state = {
    serchQuery: "",
    movies: [],
  };

  handleChange = (e) => {
    this.setState({ serchQuery: e.currentTarget.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      path: "search/movie",
      query: this.state.serchQuery,
    };

    const response = await fetchAPI.fetchMovieData(options);
    this.setState({ movies: response });
    this.onQueryChange();
    this.setState({ serchQuery: "" });
  };

  onQueryChange = () => {
    const { history, location } = this.props;

    history.push({ pathname: location.pathname, search: `search=${this.state.serchQuery}` });
  };

  render() {
    const { serchQuery, movies } = this.state;
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
              value={serchQuery}
              onChange={this.handleChange}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
        <Route path={`${match.path}`} render={(props) => <Query {...props} movies={movies} />} />
      </>
    );
  }
}

export default MoviesPage;
