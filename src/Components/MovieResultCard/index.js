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

// adult: false
// backdrop_path: "/jILeJ60zPpIjjJHGSmIeY4eO30t.jpg"
// genre_ids: [28, 18, 12]
// id: 744
// original_language: "en"
// original_title: "Top Gun"
// overview: "A heart-pounding combination of action, music and incredible aerial photography helped make Top Gun the blockbuster hit. of 1986. Top Gun takes a look at the danger and excitement that awaits every pilot at the Navy's prestigious fighter weapons school. Tom Cruise is superb as Lt. Pete "Maverick" Mitchell, a daring young flyer who's out to become the best. And Kelly McGillis sizzles as the civilian instructor who teaches Maverick a few things you can't learn in a classroom."
// popularity: 34.698
// poster_path: "/xUuHj3CgmZQ9P2cMaqQs4J0d4Zc.jpg"
// release_date: "1986-05-16"
// title: "Top Gun"
// video: false
// vote_average: 6.9
// vote_count: 4669
