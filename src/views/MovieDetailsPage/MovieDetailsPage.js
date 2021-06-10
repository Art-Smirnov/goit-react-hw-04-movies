import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";

import fetchAPI from "../../services/fetchAPI";

import Cast from "../../components/Cast";
import Reviews from "../../components/Reviews";

class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    title: null,
    vote_average: null,
    overview: null,
    genres: [],
  };

  async componentDidMount() {
    const options = {
      id: this.props.match.params.movieId,
      path: "movie/",
    };

    const response = await fetchAPI.fetchMovieData(options);

    const { poster_path, title, vote_average, overview, genres } = response;

    this.setState({
      poster_path: `https://image.tmdb.org/t/p/w300${poster_path}`,
      title,
      vote_average,
      overview,
      genres,
    });
  }

  render() {
    const { poster_path, title, vote_average, overview, genres } = this.state;
    const { match } = this.props;
    return (
      <>
        <img src={poster_path} alt={title} />
        <h1>{title}</h1>
        <p>User score: {vote_average}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
        <ul>
          <li>
            <NavLink className="NavLink" activeClassName="NavLink--active" to={`${match.url}/cast`}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLink" activeClassName="NavLink--active" to={`${match.url}/reviews`}>
              Review
            </NavLink>
          </li>
        </ul>
        <Route path={`${match.path}/cast`} component={Cast}></Route>
        <Route path={`${match.path}/reviews`} component={Reviews}></Route>
      </>
    );
  }
}

export default MovieDetailsPage;
