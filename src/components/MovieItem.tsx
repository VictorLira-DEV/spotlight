import {
  StyledMovieItem,
  StyledMovieImage,
  StyledMovieInfo,
  StyledMovieOverview,
  StyledMovieButton,
} from "./styles/MovieItem.styled";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Aos from "aos";
import "aos/dist/aos.css";

interface IMovieItem {
  image: string;
  title: string;
  vote: number;
  average: string;
  id: string;
  onClick: (e: any) => void;
}

function MovieItem(props: IMovieItem) {
  const router = useRouter();
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <StyledMovieItem data-identifier={props.id} className="get-id">
      <StyledMovieImage src={props.image} alt="something" />
      <StyledMovieInfo>
        <h3>{props.title}</h3>
        <span className={props.average}> {props.vote} </span>
      </StyledMovieInfo>
      <StyledMovieOverview className="movie-overview">
        <h1>Show Details</h1>
        <StyledMovieButton onClick={(e) => props.onClick(e)}>
          Details
        </StyledMovieButton>
      </StyledMovieOverview>
    </StyledMovieItem>
  );
}

export default MovieItem;
