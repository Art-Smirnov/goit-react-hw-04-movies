import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";
import NotFound from "./views/NotFound";

const App = () => (
  <>
    <ul>
      <li>
        <NavLink exact className="NavLink" activeClassName="NavLink--active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="NavLink" activeClassName="NavLink--active" to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movies" component={MoviesPage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default App;
