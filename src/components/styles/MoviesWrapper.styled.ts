import styled from 'styled-components';

const StyledMovieWrapper = styled.main`
  padding: 30px 60px;
  min-height: 100vh;
  background: rgb(15, 15, 15);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  overflow-x: hidden;
`;

export default StyledMovieWrapper;
