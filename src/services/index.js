import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/';
const apyKey = 'c85eab87f37d43b30658071ba8c1c21f';

const serviceRequest = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 5000,
});

const services = {
  searchMovie: (query) =>
    serviceRequest
      .get('/search/movie', {
        params: { language: 'en-US', page: 1, include_adult: false, query, api_key: apyKey },
      })
      .then((response) => response.data)
      .catch((error) => error),
};

export default services;
