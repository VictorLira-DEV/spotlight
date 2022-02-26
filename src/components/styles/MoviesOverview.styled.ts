import styled from 'styled-components';

export const StyledMovieBanner = styled.div`
  overflow: hidden;
  position: relative;
  & > .backdrop_image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const StyledMovieDetailsContainer = styled.div`
  min-width: 100vw;
  min-height: calc(100vh - 82px);
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  background: rgba(0, 0, 0, 0.6);
  padding: 30px 60px 60px 60px;
  > h1 {
    font-size: 2.5rem;
    position: absolute;
    left: 60px;
    top: 30px;
    font-weight: 100;
    display: flex;
    align-items: center;
    color: white;
  }

  svg {
    border: 1px solid white;
    border-radius: 50%;
    margin-right: 40px;
    cursor: pointer;
  }
`;

export const StyledDetailInformations = styled.div`
  flex: 1;
  min-height: 500px;
  align-self: flex-end;
  display: flex;
  color: white;

  & > div:first-of-type {
  }

  & > div:last-of-type {
    padding: 10px;
    /* border: 1px solid red; */
    width: 300px;
  }
`;

export const StyledMovieOverview = styled.div`
  .movie_play {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
    svg {
      font-size: 45px;
      border: none;
      margin-right: 10px;
    }
    h1 {
      color: white;
      font-size: 1.5rem;
    }
  }

  padding: 0 30px;
  /* border: 1px solid red; */
  .genrer {
    display: inline-block;
    margin-right: 10px;
    padding: 0 10px 0 0;
    border-right: 2px solid white;
  }
  flex: 1;
  h1 {
    font-weight: 100;
    color: #ccc;
  }

  p {
    margin-bottom: 10px;
  }

  div {
    max-height: 150px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 5px;
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.25);
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 6px;
      background: rgb(156, 156, 156);
    }
  }

  .productin__wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .production {
    background-color: rgba(255, 255, 255, 0.3);
    max-width: 150px;
    max-height: 50px;
    padding: 10px;
    object-fit: contain;
    &:not(:last-child) {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
`;

export const StyledDetailPoster = styled.div`
  align-self: flex-end;
  position: relative;
  transition: 0.3s;
  cursor: pointer;
  img {
    width: 350px;
    height: 500px;
    object-fit: cover;
  }

  &:hover .overlay {
    transition: 0.3s;
    position: absolute;
    z-index: 3;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
  }

  .content {
    color: white;
    position: absolute;
    z-index: 4;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: white;
      font-size: 1.5rem;
      border: none;
      width: 40px;
      margin-right: 10px;
    }

    p {
      font-size: 1.2rem;
    }
  }
`;

export const StyledPopUp = styled.div`
  .popup {
    position: fixed;
    width: 500px;
    height: 700px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 6;
    svg {
      position: absolute;
      color: white;
      font-size: 40px;
      right: 10px;
      top: 10px;
      cursor: pointer;
      border: 1px solid white;
      border-radius: 50%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const StyledVideoTrailer = styled.iframe`
  position: fixed;
  width: 80vw;
  height: 70vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;
  background: rgba(0.4);
`;

export const StyledPopupVideoTrailer = styled.div`
  .close_trailer {
    position: fixed;
    color: white;
    font-size: 40px;
    z-index: 5;
    right: 90%;
    border-radius: 50%;
    top: 10%;
    color: red;
  }
`;

export const StyledMovieStatus = styled.div`
  div {
    margin-bottom: 15px;
    p:first-of-type {
      color: #ccc;
      font-size: 1.2rem;
      font-weight: 100;
    }

    span:first-of-type {
      color: rgb(0, 209, 70);
      font-size: 1.2rem;
    }
  }
`;
