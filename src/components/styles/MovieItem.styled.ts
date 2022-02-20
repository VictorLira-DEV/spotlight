import styled from "styled-components";

export const StyledMovieItem = styled.div`
  position: relative;
  width: 300px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
  margin-bottom: 25px;
  transition: 0.4s;
  &:hover .movie-overview {
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
    transition: 0.5s;
  }
`;

export const StyledMovieImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

export const StyledMovieInfo = styled.div`
  background: rgb(49, 49, 49);
  padding: 10px 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  min-height: 100px;
  span {
    background: rgb(15, 15, 15);
    padding: 7px;
    border-radius: 7px;
    &.red {
      color: red;
    }
    &.orange {
      color: orange;
    }
    &.green {
      color: rgb(33, 193, 93);
    }
  }
`;

export const StyledMovieOverview = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: rgb(156, 156, 156);
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  max-height: 100%;
  scroll-behavior: scroll;
  overflow: auto;
  transform: translateY(100%);
  transition: 0.4s;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 20px;
    color: white;
  }

  button {
    background: rgb(10, 223, 92);
    width: 200px;
    padding: 10px 20px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 1rem;
    border: none;
    color: white;
    font-weight: 600;
    border-radius: 4px;
    transition: all.3s;
    &:hover {
      background: rgb(12, 185, 78);
    }
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 5px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.25);
  }
`;

export const StyledMovieButton = styled.button`
  padding: 10;
`;
