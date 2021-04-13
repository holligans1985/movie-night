import styled from 'styled-components';

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 500px;
  position: relative;
  .loading-spinner {
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default AppWrapper;
