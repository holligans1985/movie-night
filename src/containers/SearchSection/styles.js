import styled from 'styled-components';

const SearchWrapper = styled.section`
  max-width: 1200px;
  width: 94%;
  margin: 20px auto;
  padding: 0 0 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 992px) {
    width: 85%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export default SearchWrapper;
