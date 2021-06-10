import React, { Component } from "react";
import { Link } from "react-router-dom";

import fetchAPI from "../../services/fetchAPI";

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const options = {
      path: "trending/movie/week",
    };

    const response = await fetchAPI.fetchMovieData(options);

    this.setState({ movies: response });
  }

  render() {
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
