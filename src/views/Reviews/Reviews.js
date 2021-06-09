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
    // console.log(response);
    this.setState({ reviews: response });
  }

  render() {
    return (
      <>
        <ul>
          {this.state.reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Reviews;
