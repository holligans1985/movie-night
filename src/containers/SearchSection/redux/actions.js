import Search from './constants';

const searchMovies = (payload) => ({ type: Search.searchMovies, payload });

const searchMoviesSuccess = (payload) => ({ type: Search.searchMoviesSuccess, payload });

const searchMoviesError = (payload) => ({ type: Search.searchMoviesError, payload });

export { searchMovies, searchMoviesSuccess, searchMoviesError };
