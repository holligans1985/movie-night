import styled from 'styled-components';

const DetailWrapper = styled.div`
  width: 94%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
  @media (max-width: 992px) {
    width: 85%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export default DetailWrapper;
