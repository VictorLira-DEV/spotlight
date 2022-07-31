import Axios from 'axios';
import MovieOverview from '../../src/components/MovieOverview';
import { FEATURED_API } from '../../src/services/api/movieApi';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next';

interface IMovieOriginalResponse {
  vote_average: string;
  id: string;
  poster_path: string;
  title: string;
}

interface IMovieDetail {
  id: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  release_date: string;
  title: string;
  genres: { id: string; name: string }[];
  original_language: string;
  production_companies: { id: string; logo_path: string }[];
  videos: { results: { key: string }[] };
  revenue: number;
  budget: number;
  status: string;
}

interface IProps {
  movieDetail: IMovieDetail;
}

function MovieDetails(props: IProps) {
  const { movieDetail } = props;
  const router = useRouter();

  const backToRoute = function () {
    router.replace('/');
  };

  return (
    <React.Fragment>
      <Head>
        <title> Movie Overview </title>
        <meta
          name="description"
          content="Checkout all the details about your favorite movie"
        ></meta>
      </Head>
      <MovieOverview
        backToRoute={backToRoute}
        movieDetail={movieDetail}
        trailer={
          movieDetail.videos.results.length > 0
            ? movieDetail.videos.results[0].key
            : '/GgZpCtBXw'
        }
      />
    </React.Fragment>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { movieId } = context.params!;

  let response = await Axios({
    url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=04c35731a5ee918f014970082a0088b1&append_to_response=videos`,
    method: 'GET',
  });

  return {
    props: {
      movieDetail: response.data,
    },
    revalidate: 50,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let response = await Axios({
    url: FEATURED_API,
    method: 'GET',
  });

  return {
    fallback: false,
    paths: response.data.results.map((movie: IMovieOriginalResponse) => ({
      params: { movieId: movie.id.toString() },
    })),
  };
};

export default MovieDetails;
