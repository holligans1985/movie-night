import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Row, Col, Divider } from 'antd';
import { isEmptyObj } from '../../helpers';
import DetailWrapper from './styles';
import DetailCard from '../../Components/DetailCard';

function MovieDetails() {
  const { state: movieDetails = {} } = useSelector((state) => state.router.location);

  const isMovie = !isEmptyObj(movieDetails);

  if (isMovie)
    return (
      <DetailWrapper>
        <Divider orientation="left">Movie Details</Divider>
        <Row gutter={16}>
          <Col className="gutter-row" span={24}>
            <DetailCard movie={movieDetails} />
          </Col>
        </Row>
      </DetailWrapper>
    );
  return <Redirect to="/" />;
}

export default MovieDetails;
