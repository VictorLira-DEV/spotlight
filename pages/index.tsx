import React, { useContext } from "react";
import MoviesWrapper from "../src/components/MoviesWrapper";
import Head from "next/head";
import MovieItem from "../src/components/MovieItem";
import axios from "axios";
import { useRouter } from "next/router";
import { FEATURED_API, IMAGE_API } from "../src/services/api/movieApi";
import { SearchPageContext } from '../src/context/searchMovieinput'
import {
  IMovieDetails,
} from "../src/interface/interfaces";

interface IHome {
  movies: IMovieDetails[];
}

const Home = (props: IHome) => {
  const router = useRouter();
  const {searchMovieValue} = useContext(SearchPageContext)
  const getVoteAverage = function (average: number) {
    if (average <= 3) {
      return "red";
    } else if (average <= 6) {
      return "orange";
    } else {
      return "green";
    }
  };

  function showMovieDetail(e: any) {
    const route = e.currentTarget
      .closest(".get-id")
      ?.getAttribute("data-identifier");
    router.replace("/" + route);
  }

  return (
    <MoviesWrapper>
      <Head>
        <title>Movie app</title>
        <meta
          name="description"
          content="take a look at the most popular movies nowadays"
        />
      </Head>
      {props.movies.map((movie: IMovieDetails) => {
        return (
          <MovieItem
            onClick={showMovieDetail}
            id={movie.id}
            key={movie.id}
            average={getVoteAverage(movie.vote_average)}
            title={movie.title}
            vote={movie.vote_average}
            image={IMAGE_API + movie.poster_path}
          />
        );
      })}
    </MoviesWrapper>
  );
};

export async function getStaticProps() {
  let response = await axios({
    url: FEATURED_API,
    method: "GET",
  });

  let data = await response.data;

  return {
    props: {
      movies: data.results
    },
    revalidate: 3600,
  };
}

export default Home;
