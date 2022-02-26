import {
  StyledMovieItem,
  StyledMovieImage,
  StyledMovieInfo,
  StyledMovieOverview,
  StyledMovieButton,
} from "./styles/MovieItem.styled";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { IMovieItem } from '../interface/interfaces'

import Aos from "aos";
import "aos/dist/aos.css";

function MovieItem(props: IMovieItem) {
  const router = useRouter();
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <StyledMovieItem
      data-identifier={props.id}
      className="get-id"
      data-aos="zoom-in"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
      data-aos-duration="800"
    >
      <StyledMovieImage src={props.image} alt="something" />
      <StyledMovieInfo>
        <h3>{props.title}</h3>
        <span className={props.average}> {props.vote} </span>
      </StyledMovieInfo>
      <StyledMovieOverview className="movie-overview">
        <StyledMovieButton onClick={(e) => props.onClick(e)}>
          Details
        </StyledMovieButton>
      </StyledMovieOverview>
    </StyledMovieItem>
  );
}

export default MovieItem;
