import Search from './constants';

const initialState = {
  loading: false,
  isError: false,
  errorMsg: '',
  movieSearchResult: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case Search.searchMovies:
      return { loading: true, ...state };
    case Search.searchMoviesSuccess: {
      const { payload } = action;
      return { ...state, loading: false, movieSearchResult: payload };
    }
    case Search.searchMoviesError: {
      const { error, errorMsg } = action.payload;
      return { ...state, loading: false, isError: !!error, errorMsg };
    }
    default:
      return { ...state };
  }
};

export default searchReducer;
