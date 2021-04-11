import { Movies } from './constants';

export const loadingMovies = () => {
  return {
    type: Movies.loadingMovies,
  };
};

export const loadedMovies = (data) => {
  return {
    type: Movies.loadedMovies,
    payload: data,
  };
};

export const errorLoadingMovies = () => {
  return {
    type: Movies.errorLoadingMovies,
  }
};
