export interface IMovieOriginalResponse {
  vote_average: string;
  id: string;
  poster_path: string;
  title: string;
}

export interface IMovieDetails {
  vote_average: number;
  id: string;
  poster_path: string;
  title: string;
}

export interface IMovieItem {
  image: string;
  title: string;
  vote: number;
  average: string;
  id: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}