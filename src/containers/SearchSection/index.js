import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actionTypes from './redux/constants';
// import searchActions from './redux/actions';
// import PropTypes from 'prop-types';
import SearchBar from '../../Components/SearchBar';
import MovieResultCard from '../../Components/MovieResultCard';

const SearchSection = () => {
  // Hooks
  const movieSearchResult = useSelector((state) => state.Search.movieSearchResult);
  const loading = useSelector((state) => state.Search.loading);
  const dispatch = useDispatch();

  const handleOnSearch = (query) => dispatch({ type: actionTypes.searchMovies, payload: query });

  return (
    <div>
      <SearchBar
        placeholder="Search a movie"
        allowClear
        onSearch={handleOnSearch}
        loading={loading}
        enterButton
      />
      {movieSearchResult && (
        <div style={{ maxWidth: '90%', margin: '0 auto' }}>
          {movieSearchResult.map((movie) => (
            <MovieResultCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}

      {!movieSearchResult && <p>No results</p>}
    </div>
  );
};

SearchSection.propTypes = {};

export default SearchSection;
