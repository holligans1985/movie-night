import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Divider, Row, Col } from 'antd';
import actionTypes from './redux/constants';
import SearchWrapper from './styles';
import SearchBar from '../../Components/SearchBar';
import MovieResultCard from '../../Components/MovieResultCard';

const SearchSection = () => {
  const movieSearchResult = useSelector((state) => state.Search.movieSearchResult);
  const loading = useSelector((state) => state.Search.loading);
  const dispatch = useDispatch();

  const handleOnSearch = (query) => dispatch({ type: actionTypes.searchMovies, payload: query });

  return (
    <SearchWrapper>
      <SearchBar
        placeholder="Search a movie"
        allowClear
        onSearch={handleOnSearch}
        loading={loading}
        enterButton
      />
      <Divider orientation="center">Seach Results</Divider>
      {movieSearchResult && (
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

      {!movieSearchResult && <p>No results</p>}
    </SearchWrapper>
  );
};

SearchSection.propTypes = {};

export default SearchSection;
