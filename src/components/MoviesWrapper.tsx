import { ReactNode } from 'react';
import StyledMovieWrapper from './styles/MoviesWrapper.styled';

interface Iprops {
  children: ReactNode;
}
function MoviesWrapper(prosp: Iprops) {
  return <StyledMovieWrapper>{prosp.children}</StyledMovieWrapper>;
}

export default MoviesWrapper;
