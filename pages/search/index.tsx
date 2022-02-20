import MoviesWrapper from "../../src/components/MoviesWrapper";
import MovieItem from "../../src/components/MovieItem";
import { IMAGE_API } from "../../src/services/api/movieApi";
import { useContext, useEffect, useState } from "react";
import { SearchPageContext } from "../../src/context/searchMovieinput";
import SearchPageProvider from "../../src/context/searchMovieinput";
import { useRouter } from "next/router";
import Head from "next/head";
import Axios from "axios";
import { SEARCH_API } from "../../src/services/api/movieApi";

function Search() {
  // const { searchMovieValue } = useContext(SearchPageContext);
  const router = useRouter();
  const [allData, setAllData] = useState([]);
  const [currentMovie, setCurrentMovie] = useState<string | null>("");
  const { searchMovieValue } = useContext(SearchPageContext);

  useEffect(() => {
    const current = localStorage.getItem("search");
    async function getData() {
      const response = await Axios(
        `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${current}`
      );
      const data = await response.data.results;
      setAllData(data);
    }
    getData();
    console.log('jkjkjkj')
  }, [searchMovieValue]);

  function showMovieDetail(e: any) {
    const route = e.currentTarget
      .closest(".get-id")
      ?.getAttribute("data-identifier");

    localStorage.setItem("movie-id", route);
    router.replace("search/" + route);
  }

  return (
    <SearchPageProvider>
      <MoviesWrapper>
        <Head>
          <title>Movie app</title>
          <meta
            name="description"
            content="take a look at the most popular movies nowadays"
          />
        </Head>
        {allData.map((movie: any) => {
          return (
            <MovieItem
              onClick={(e) => showMovieDetail(e)}
              id={movie.id}
              key={movie.id}
              average={movie.vote_average}
              title={movie.title}
              vote={movie.vote_average}
              image={IMAGE_API + movie.poster_path}
            />
          );
        })}
      </MoviesWrapper>
    </SearchPageProvider>
  );
}

export default Search;
