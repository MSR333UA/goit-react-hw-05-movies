import { Layout } from 'components/Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from 'services/routes';
import React, { lazy } from 'react';

const Cast = lazy(() =>
  import('views/Cast').then(module => ({
    default: module.Cast,
  }))
);
const Home = lazy(() =>
  import('views/Home').then(module => ({
    default: module.Home,
  }))
);
const MovieDetails = lazy(() =>
  import('views/MovieDetails').then(module => ({
    default: module.MovieDetails,
  }))
);
const Movies = lazy(() =>
  import('views/Movies').then(module => ({
    default: module.Movies,
  }))
);
const Reviews = lazy(() =>
  import('views/Reviews').then(module => ({
    default: module.Reviews,
  }))
);

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routes.MOVIES} element={<Movies />} />
        <Route path={routes.MOVIE_ID} element={<MovieDetails />}>
          <Route path={routes.CAST} element={<Cast />} />
          <Route path={routes.REVIEWS} element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to={routes.HOME} />} />
      </Route>
    </Routes>
  );
};
