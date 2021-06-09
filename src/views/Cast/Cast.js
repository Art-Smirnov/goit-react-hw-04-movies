import React, { Component } from "react";

import fetchAPI from "../../services/fetchAPI";

class Cast extends Component {
  state = {
    // id,
    // profile_path,
    // original_name,
    // character,
    cast: [],
  };

  async componentDidMount() {
    const options = {
      path: "movie/",
      id: this.props.match.params.movieId,
      param: "/credits",
    };

    const response = await fetchAPI.fetchMovieData(options);

    this.setState({ cast: response.cast });
  }

  render() {
    return (
      <>
        <ul>
          {this.state.cast.map(({ id, profile_path, original_name, character }) => (
            <li key={id}>
              <img src={`https://image.tmdb.org/t/p/w300${profile_path}`} alt={original_name} />
              <p>{original_name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
