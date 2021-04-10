import Movies from './constants';

const fetchMovies = (payload) => ({ type: Movies.fetchMovies, payload });

const fetchMoviesSuccess = (payload) => ({ type: Movies.fetchMoviesSuccess, payload });

const fetchMoviesError = (payload) => ({ type: Movies.fetchMoviesError, payload });

export { fetchMovies, fetchMoviesSuccess, fetchMoviesError };
