import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Divider, Row, Col } from 'antd';
import actionTypes from './redux/constants';
import SearchWrapper from './styles';
import SearchBar from '../../Components/SearchBar';
import MovieResultCard from '../../Components/MovieResultCard';
import Loader from '../../Components/Loader';

const SearchSection = () => {
  const movieSearchResult = useSelector((state) => state.Search.movieSearchResult);
  const loading = useSelector((state) => state.Search.loading);
  const errorMsg = useSelector((state) => state.Search.errorMsg);

  const dispatch = useDispatch();

  const handleOnSearch = (query) =>
    query && dispatch({ type: actionTypes.searchMovies, payload: query });

  return (
    <SearchWrapper>
      <SearchBar
        placeholder="Search a movie"
        onSearch={handleOnSearch}
        allowClear={false}
        loading={loading}
        enterButton
      />
      <Divider orientation="center">Seach Results</Divider>
      {loading && <Loader text="Loading movies" size="large" />}
      {movieSearchResult.length !== 0 && (
        <Row gutter={[24, 32]}>
          {movieSearchResult.map((movie) => {
            if (movie.poster_path || movie.backdrop_path) {
              return (
                <Col xs={24} sm={12} md={8} lg={6} key={movie.id}>
                  <MovieResultCard movie={movie} />
                </Col>
              );
            }
            return null;
          })}
        </Row>
      )}
      {errorMsg && !loading && <p style={{ color: '#A30000' }}>{errorMsg}</p>}
      {movieSearchResult.length === 0 && !loading && !errorMsg && <p>No results</p>}
    </SearchWrapper>
  );
};

SearchSection.propTypes = {};

export default SearchSection;
