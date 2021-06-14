import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";

import styles from "./Navigation.module.scss";
const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <NavLink exact className="NavLink" activeClassName="NavLink--active" to={routes.home}>
        Home
      </NavLink>
      <NavLink className="NavLink" activeClassName="NavLink--active" to={routes.movies}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
