import { Card } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  width: 100%;
  .ant-card-head-title {
    font-size: 1.5em;
    font-weight: 100;
    text-align: center;
  }
  .ant-card-cover {
    height: 400px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .ant-card-body {
    padding: 0;
  }
  .ant-card-actions {
    background: #1d3557;
    border-top: none;
    font-size: 1.5em;
    font-weight: 100;
  }
  @media (max-width: 1200px) {
    .ant-card-head-title {
      font-size: 1.2em;
    }
    .ant-card-cover {
      height: 300px;
    }
  }
  @media (max-width: 575px) {
    width: 300px;
    margin: 0 auto;
    .ant-card-cover {
      height: 400px;
    }
  }
`;

export default StyledCard;
