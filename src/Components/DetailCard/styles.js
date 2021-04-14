import styled from 'styled-components';

const StyledDetailCard = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  margin: 30px auto;
  border: 1px solid #ced4da;
  border-radius: 5px;
  .poster-wrapper {
    height: 100%;
    width: 30%;
    img {
      max-width: 100%;
      width: 100%;
    }
  }
  .copy-wrapper {
    height: 100%;
    width: 70%;
    padding: 20px;
    font-weight: 100;
    h2 {
      font-size: 3em;
      margin-bottom: 0;
    }
    p {
      font-size: 1.3em;
      line-height: 1.1;
    }
  }
  @media (max-width: 992px) {
    .poster-wrapper {
      width: 40%;
    }
    .copy-wrapper {
      width: 60%;
      padding: 10px;

      h2 {
        font-size: 2em;
      }
      p {
        font-size: 1.1em;
      }
    }
  }
`;

export default StyledDetailCard;
