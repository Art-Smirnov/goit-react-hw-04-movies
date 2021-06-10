import React, { Component } from "react";

import fetchAPI from "../../services/fetchAPI";

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
    console.log(response);
    this.setState({ movies: response });

    this.setState({ serchQuery: "" });
  };

  render() {
    const { serchQuery } = this.state;
    return (
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
    );
  }
}

export default MoviesPage;
