import Movies from './constants';

const initialState = {
  loading: false,
  isError: false,
  errorMsg: '',
  movies: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Movies.fetchMovies:
      return { loading: true, ...state };
    case Movies.fetchMoviesSuccess: {
      const { movies } = action.payload;
      return { loading: false, movies, ...state };
    }
    case Movies.fetchMoviesError: {
      const { error, errorMsg } = action.payload;
      return { loading: false, isError: !!error, errorMsg, ...state };
    }
    default:
      return { ...state };
  }
};

export default moviesReducer;
