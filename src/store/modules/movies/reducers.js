import { Movies } from './constants';

const deafultState = {
  isLoading: false,
  isError: false,
  movies: [],
};

const moviesReducer = function (state = deafultState, action) {
  switch (action.type) {
    case Movies.loadingMovies:
      return {
        ...state,
        movies: [],
        isLoading: true,
      };
    case Movies.loadedMovies:
      return {
        ...state,
        movies: action.payload,
        isLoading: false,
      };
    case Movies.errorLoadingMovies:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default moviesReducer;
