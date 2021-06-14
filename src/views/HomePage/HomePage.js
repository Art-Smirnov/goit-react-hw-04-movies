import React, { Component } from "react";

import fetchAPI from "../../services/fetchAPI";
import MovieList from "../../components/MovieList";

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const options = {
      path: "trending/movie/week",
      param: "?",
    };

    const response = await fetchAPI.fetchMovieData(options);

    this.setState({ movies: response });
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        {movies.length > 0 && <MovieList movies={movies} />}
      </>
    );
  }
}

export default HomePage;
