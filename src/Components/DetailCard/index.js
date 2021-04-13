/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import StyledDetailCard from './styles';

function DetailCard({ movie }) {
  const { poster_path, title, release_date, overview } = movie;
  const posterUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <StyledDetailCard bgImg={posterUrl}>
      <div className="poster-wrapper">
        <img alt={`Img of ${title}`} src={posterUrl} />
      </div>
      <div className="copy-wrapper">
        <h2>{title}</h2>
        <p>{overview}</p>
        <p>{release_date}</p>
      </div>
    </StyledDetailCard>
  );
}

DetailCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DetailCard;
