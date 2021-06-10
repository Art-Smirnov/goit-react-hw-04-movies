import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";
import NotFound from "./views/NotFound";
import AppBar from "./components/AppBar";

import routes from "./routes";

const App = () => (
  <>
    <AppBar />
    <Switch>
      <Route exact path={routes.home} component={HomePage} />
      <Route exact path={routes.movies} component={MoviesPage} />
      <Route path={routes.moviesDetails} component={MovieDetailsPage} />
      <Route component={NotFound} />
    </Switch>
  </>
);

export default App;
