import { Movies } from './constants';

const defaultState = {
  isLoading: false,
  isError: false,
  movies: [],
  movieDetail: {},
};

const moviesReducer = function (state = defaultState, action) {
  switch (action.type) {
    case Movies.loadingMovies:
      return {
        ...state,
        isLoading: true,
      };
    case Movies.loadedMovies:
      return {
        ...state,
        movies: action.payload,
        isLoading: false,
      };
    case Movies.loadedMoviesWithPrevious:
      return {
        ...state,
        movies: [
          ...state.movies,
          ...action.payload
        ],
        isLoading: false,
      };
    case Movies.errorLoadingMovies:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case Movies.loadingMovieDetail:
      return {
        ...state,
        isLoading: true,
      };
    case Movies.loadedMovieDetail:
      return {
        ...state,
        movieDetail: action.payload,
        isLoading: false,
      };
    case Movies.errorLoadingMovieDetail:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case Movies.resetMovieDetail:
      return {
        ...state,
        movieDetail: {},
      };
    default:
      return state;
  }
};

export default moviesReducer;
