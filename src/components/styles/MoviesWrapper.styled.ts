import styled from 'styled-components';

const StyledMovieWrapper = styled.main`
  padding: 30px 60px;
  min-height: calc(100vh - 82px);
  background: rgb(15, 15, 15);
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(320px,1fr));
  align-items: center;
  justify-items: center;
  overflow-x: hidden;

  @media screen and (max-width: ${({theme}) => theme.tablet}) {
    padding: 30px 20px;
  }
`;

export default StyledMovieWrapper;
