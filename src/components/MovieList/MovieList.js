import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const MovieList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <NavLink
            to={{
              pathname: `movies/${id}`,
              state: { from: location },
            }}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired, title: PropTypes.string.isRequired })),
};

export default withRouter(MovieList);
