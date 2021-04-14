/* eslint-disable camelcase */
import React from 'react';
// import { SettingOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StyledCard from './styles';

function MovieResultCard({ movie }) {
  const { title, poster_path, id, backdrop_path } = movie;

  return (
    <Link
      to={{
        pathname: `/movie-details/${id}`,
        state: movie,
      }}
    >
      <StyledCard
        hoverable
        title={title}
        cover={
          <img
            alt="example"
            src={`https://image.tmdb.org/t/p/w500/${poster_path || backdrop_path}`}
          />
        }
      />
    </Link>
  );
}

MovieResultCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MovieResultCard;
