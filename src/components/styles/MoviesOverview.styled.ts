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
  background: rgba(0, 0, 0, 0.6);
  padding: 60px 60px 60px 60px;
  display: grid;
  grid-template-rows: 100px 500px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'title title title'
    'poster overview overview';

  .main__title {
    display: flex;
    align-items: flex-start;
    grid-area: title;
    color: white;
    margin-top: -20px;

    h1 {
      font-weight: 100;
      font-size: 2.5rem;
      margin-top: -10px;
    }
  }

  svg {
    border: 1px solid white;
    border-radius: 50%;
    margin-right: 40px;
    min-width: 40px;
    min-height: 40px;
    cursor: pointer;
  }

  @media screen and (max-width: 1084px) {
    padding: 0 60px 60px 60px;
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;
    grid-template-areas:
      'title'
      'poster'
      'overview';

    .main__title {
      margin-bottom: 3rem;
      margin-top: 3rem;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    padding: 0px 20px 60px 20px;
    .main__title {
      h1 {
        font-size: 1.6rem;
        margin-top: 0px;
      }
    }
  }
`;

export const StyledDetailInformations = styled.div`
  grid-area: overview;
  flex: 1;
  min-height: 500px;
  align-self: flex-end;
  display: flex;
  color: white;

  & > div:first-of-type {
  }

  & > div:last-of-type {
    padding: 10px;
    width: 300px;
  }

  @media screen and (max-width: 1335px) {
    & > div:last-of-type {
      width: auto;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    margin-top: 3rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.phone}) {
    flex-direction: column;
  }
`;

export const StyledMovieOverview = styled.div`
  padding: 0 30px;
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

  .genrer {
    display: inline-block;
    margin-right: 10px;
    padding: 0 10px 0 0;
    border-right: 2px solid white;
  }
  flex: 1;
  h1 {
    font-weight: 100;
    color: rgb(201, 201, 201);
    border-bottom: 1px solid rgba(204, 204, 204, 0.2);
  }

  p {
    margin-bottom: 20px;
    font-weight: 100;
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

  .production__wrapper {
    display: flex;
    flex-wrap: wrap;
    max-height: 50px;
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

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    padding: 0 30px 0 0;
  }
  @media screen and (max-width: ${({ theme }) => theme.phone}) {
    padding: 0;
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

export const StyledDetailPoster = styled.div`
  grid-area: poster;
  align-self: flex-end;
  position: relative;
  transition: 0.3s;
  width: 350px;
  height: 500px;
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

    > .expand__icon {
      color: white;
      border: none;
      margin-right: 10px;
      object-fit: contain;
      min-width: 30px;
      max-height: 30px;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 1084px) {
    justify-self: center;
  }

  @media screen and (max-width: ${({ theme }) => theme.phone}) {
    width: 100%;
    height: auto;
    & > img {
      width: 100%;
      height: auto;
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

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    .popup {
      width: 80vw;
      height: auto;
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

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    height: 60%;
    width: 95vw;
  }
`;

export const StyledPopupVideoTrailer = styled.div`
  position: relative;
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

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    .close_trailer {
      left: 50%;
      transform: translateX(-50%);
      top: 15%;
    }
  }
`;
