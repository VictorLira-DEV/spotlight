import React, { useState } from "react";
import Head from "next/head";
import MovieOverview from "../../../src/components/MovieOverview";
import { useContext, useEffect } from "react";
import { SearchPageContext } from "../../../src/context/searchMovieinput";
import Router, { useRouter } from "next/router";
import Axios from "axios";

interface IMovieDetails {
  backdrop_path: string;
  poster_path: string;
  overview: string;
  release_date: string;
  title: string;
  genres: { id: string; name: string }[];
  original_language: string;
  production_companies: { id: string; logo_path: string }[];
  budget: number;
  revenue: number;
  status: string;
  videos: any;
}

function Search() {
  const { searchMovieValue } = useContext(SearchPageContext);
  const [currentMovie, setCurrentMovie] = useState<IMovieDetails>(
    {} as IMovieDetails
  );
  const router = useRouter();

  const goBackToRoute = function () {
    router.replace("/search");
  };

  useEffect(() => {
    async function fetchCurrentMovie() {
      const currentId = localStorage.getItem("movie-id");
      const response = await Axios({
        url: `https://api.themoviedb.org/3/movie/${currentId}?api_key=04c35731a5ee918f014970082a0088b1&append_to_response=videos`,
        method: "GET",
      });

      const data = await response.data;
      console.log(data)
      setCurrentMovie(data);
    }
    fetchCurrentMovie();
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title> Movie Overview </title>
        <meta
          name="description"
          content="Checkout all the details about your favorite movie"
        ></meta>
      </Head>
      {currentMovie.title && (
        <MovieOverview
          backToRoute={goBackToRoute}
          movieDetail={currentMovie}
          trailer={
            currentMovie.videos.results.length > 0
              ? currentMovie.videos.results[0].key
              : ""
          }
        />
      )}
    </React.Fragment>
  );
}

export default Search;
