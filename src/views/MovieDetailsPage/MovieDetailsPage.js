import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import fetchAPI from "../../services/fetchAPI";

import routes from "../../routes";
import Section from "../../components/Section";
import MainMovieInfo from "../../components/MainMovieInfo";
import AdditionalInfo from "../../components/AdditionalInfo";

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
      param: "?",
    };

    const response = await fetchAPI.fetchMovieData(options);
    const { poster_path, title, vote_average, overview, genres, release_date } = response;

    this.setState({
      poster_path: `https://image.tmdb.org/t/p/w300${poster_path}`,
      title,
      release_date: release_date.slice(0, 4),
      vote_average,
      overview,
      genres,
    });
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const { poster_path, title, release_date, vote_average, overview, genres } = this.state;
    const movieDetailsLocation = this.props.location;
    console.log(movieDetailsLocation);
    return (
      <Section>
        <Button
          size="small"
          startIcon={<ArrowBackIosOutlinedIcon />}
          variant="contained"
          color="primary"
          type="button"
          onClick={this.handleGoBack}
        >
          Go back
        </Button>
        {poster_path && (
          <MainMovieInfo
            url={poster_path}
            title={title}
            release_date={release_date}
            vote_average={vote_average}
            overview={overview}
            genres={genres}
          />
        )}
        <AdditionalInfo />
      </Section>
    );
  }
}

export default MovieDetailsPage;
