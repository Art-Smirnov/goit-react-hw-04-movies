import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import routes from "./routes";
import Spiner from "./components/Spiner";

const AppBar = lazy(() => import("./components/AppBar" /* webpackChunkName: "app-bar" */));
const HomePage = lazy(() => import("./views/HomePage" /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import("./views/MoviesPage" /* webpackChunkName: "movies-page" */));
const MovieDetailsPage = lazy(() => import("./views/MovieDetailsPage" /* webpackChunkName: "movie-details-page" */));
const NotFound = lazy(() => import("./views/NotFound" /* webpackChunkName: "not-found" */));

const App = () => (
  <Suspense fallback={<Spiner />}>
    <AppBar />
    <Switch>
      <Route exact path={routes.home} component={HomePage} />
      <Route exact path={routes.movies} component={MoviesPage} />
      <Route path={routes.moviesDetails} component={MovieDetailsPage} />
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default App;
