import MoviesWrapper from "../../src/components/MoviesWrapper";
import MovieItem from "../../src/components/MovieItem";
import { IMAGE_API, SEARCH_API } from "../../src/services/api/movieApi";
import { useContext, useEffect, useState } from "react";
import { SearchPageContext } from "../../src/context/searchMovieinput";
import SearchPageProvider from "../../src/context/searchMovieinput";
import { useRouter } from "next/router";
import Head from "next/head";
import { getVoteAverage } from "../../src/helper/functions";
import useAxios from "../../src/hooks/useAxios";

interface IsearchedMovie {
  image: string;
  title: string;
  vote: number;
  average: string;
  vote_average: number;
  poster_path: string;
  id: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function Search() {
  const router = useRouter();
  const [allData, setAllData] = useState<IsearchedMovie[]>([]);
  const { searchMovieValue } = useContext(SearchPageContext);
  const { sendRequest } = useAxios();

  useEffect(() => {
    const current = localStorage.getItem("search");
    async function getData(response: any) {
      const data = response.data.results;
      setAllData(data);
    }
    sendRequest({ url: SEARCH_API + current }, getData);
  }, [searchMovieValue]);

  function showMovieDetail(e: React.MouseEvent<HTMLButtonElement>) {
    const route = e.currentTarget
      .closest(".get-id")!
      .getAttribute("data-identifier")!;

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
        {allData.map((movie: IsearchedMovie) => {
          return (
            <MovieItem
              onClick={(e) => showMovieDetail(e)}
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
    </SearchPageProvider>
  );
}

export default Search;
