import { IMAGE_API } from '../services/api/movieApi';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { currencyFormatting } from '../helper/functions';
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
// import { useRouter } from "next/router";
import { RiCloseFill } from 'react-icons/ri';
import PopUp from './ui/PopUp';
import { BiPlay } from 'react-icons/bi';
import { CgArrowsExpandRight } from 'react-icons/cg';
import {
  StyledDetailInformations,
  StyledMovieDetailsContainer,
  StyledDetailPoster,
  StyledMovieBanner,
  StyledMovieOverview,
  StyledPopUp,
  StyledVideoTrailer,
  StyledPopupVideoTrailer,
  StyledMovieStatus,
} from './styles/MoviesOverview.styled';

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
}

interface IProps {
  movieDetail: IMovieDetails;
  trailer?: string;
  backToRoute: () => void;
}

function MovieOverview(props: IProps) {
  const { movieDetail } = props;
  const [displayPopUp, setDisplayPopUp] = useState(false);
  const [displayTrailerPopUp, setDisplayTrailerPopUp] = useState(false);
  const [posterHoverEffect, setPostHoverEffect] = useState(false);

  useEffect(() => {
    Aos.init();
  });

  const displayPopUpHandler = function () {
    setDisplayPopUp(true);
  };

  const hidePopUp = function () {
    setDisplayPopUp(false);
  };

  const displayMovieTrailerHandler = function () {
    setDisplayTrailerPopUp(true);
  };

  const hideMoviePlayHandler = function () {
    setDisplayTrailerPopUp(false);
  };

  return (
    <React.Fragment>
      {displayTrailerPopUp && (
        <StyledPopupVideoTrailer>
          <PopUp onCloseModel={hideMoviePlayHandler}>
            <RiCloseFill
              className="close_trailer"
              onClick={() => hideMoviePlayHandler()}
            />
            <StyledVideoTrailer
              aria-controls="controls"
              src={`https://www.youtube.com/embed/${props.trailer}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </PopUp>
        </StyledPopupVideoTrailer>
      )}
      {displayPopUp && (
        <StyledPopUp>
          <PopUp className="popup" onCloseModel={hidePopUp}>
            <RiCloseFill onClick={() => hidePopUp()} />
            <img src={IMAGE_API + movieDetail!.poster_path} alt="poster path" />
          </PopUp>
        </StyledPopUp>
      )}
      <StyledMovieBanner>
        <img
          className="backdrop_image"
          src={
            movieDetail!.backdrop_path
              ? IMAGE_API + movieDetail!.backdrop_path
              : '/background-default.jpg'
          }
        />
        <StyledMovieDetailsContainer
          data-aos="zoom-out"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-duration="800"
        >
          <StyledDetailPoster
            onMouseLeave={() => setPostHoverEffect(false)}
            onMouseEnter={() => setPostHoverEffect(true)}
            onMouseDown={() => setPostHoverEffect(true)}
          >
            <img src={IMAGE_API + movieDetail!.poster_path} />
            <div className="overlay" />
            {posterHoverEffect && (
              <div className="content" onClick={() => displayPopUpHandler()}>
                <CgArrowsExpandRight className="expand__icon" />
                <p>Expand</p>
              </div>
            )}
          </StyledDetailPoster>
          <div className="main__title">
            <AiOutlineArrowLeft onClick={() => props.backToRoute()} />
            <h1>{movieDetail!.title}</h1>
          </div>
          <StyledDetailInformations>
            <StyledMovieOverview>
              <div
                className="movie_play"
                onClick={() => displayMovieTrailerHandler()}
              >
                <BiPlay />
                <h1> Preview </h1>
              </div>
              <h1>Overview</h1>
              <div>
                <p>{movieDetail!.overview}</p>
              </div>
              <h1>Release Date</h1>
              <p> {movieDetail!.release_date} </p>
              <h1>Genrer</h1>
              {movieDetail.genres &&
                movieDetail.genres.map(genrer => (
                  <p key={genrer.id} className="genrer" id={genrer.id}>
                    {genrer.name}
                  </p>
                ))}
              <h1>Language</h1>
              <p>
                {movieDetail!.original_language === 'en'
                  ? 'English'
                  : movieDetail!.original_language}
              </p>
              <h1>Production Company</h1>
              <div className="production__wrapper">
                {movieDetail.production_companies &&
                  movieDetail.production_companies.map(logo => (
                    <img
                      alt="something"
                      key={logo.id}
                      className="production"
                      src={
                        logo.logo_path
                          ? IMAGE_API + logo.logo_path
                          : '/default-production.jpg'
                      }
                    />
                  ))}
              </div>
            </StyledMovieOverview>
            <StyledMovieStatus>
              <div>
                <p>Status</p>
                <p>{movieDetail!.status}</p>
              </div>
              <div>
                <p>Budget</p>
                <span> $ </span>
                <span>{currencyFormatting(movieDetail.budget)}</span>
              </div>
              <div>
                <p>Revenue</p>
                <span> $ </span>
                <span>{currencyFormatting(movieDetail!.revenue)}</span>
              </div>
            </StyledMovieStatus>
          </StyledDetailInformations>
        </StyledMovieDetailsContainer>
      </StyledMovieBanner>
    </React.Fragment>
  );
}

export default MovieOverview;
