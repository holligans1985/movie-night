import Search from './constants';

const initialState = {
  loading: false,
  errorMsg: '',
  movieSearchResult: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case Search.searchMovies:
      return { ...state, loading: true, movieSearchResult: [], errorMsg: '' };
    case Search.searchMoviesSuccess: {
      const { payload } = action;
      return { ...state, loading: false, movieSearchResult: payload, errorMsg: '' };
    }
    case Search.searchMoviesError: {
      const { errorMsg } = action.payload;
      return { ...state, loading: false, errorMsg };
    }
    default:
      return { ...state };
  }
};

export default searchReducer;
