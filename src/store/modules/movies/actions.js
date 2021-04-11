import { Movies } from './constants';

export const loadingMovies = () => ({
  type: Movies.loadingMovies,
});

export const loadedMovies = (data) => ({
  type: Movies.loadedMovies,
  payload: data,
});

export const loadedMoviesWithPrevious = (data) => ({
  type: Movies.loadedMoviesWithPrevious,
  payload: data,
});

export const errorLoadingMovies = () => ({
  type: Movies.errorLoadingMovies,
});

export const loadingMovieDetail = () => ({
  type: Movies.loadingMovieDetail,
});

export const loadedMovieDetail = (data) => ({
  type: Movies.loadedMovieDetail,
  payload: data,
});

export const errorLoadingMovieDetail = () => ({
  type: Movies.errorLoadingMovieDetail,
});
