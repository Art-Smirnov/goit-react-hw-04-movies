import React from "react";
import { NavLink } from "react-router-dom";

const Query = ({ movies, match }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <NavLink to={`${match.url}/${id}`}>{title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Query;
