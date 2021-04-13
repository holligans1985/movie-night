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
    max-height: 500px;
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
`;

export default StyledCard;
