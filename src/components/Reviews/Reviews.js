import React, { Component } from "react";

import fetchAPI from "../../services/fetchAPI";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const options = {
      path: "movie/",
      id: this.props.match.params.movieId,
      param: "/reviews",
    };

    const response = await fetchAPI.fetchMovieData(options);
    this.setState({ reviews: response });
  }

  render() {
    const { reviews } = this.state;
    return (
      <ul>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>
    );
  }
}

export default Reviews;
