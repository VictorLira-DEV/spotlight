import { StyledHeader, StyledInput } from "../styles/Header.styled";
import { useState } from "react";
import Axios from "axios";
import { useContext } from "react";
import { SearchPageContext } from "../../context/searchMovieinput";
import { useRouter } from "next/router";

function Header() {
  const { searchMovieFunction, searchMovieValue } = useContext(SearchPageContext);
  const [searchValue, setSearchValue] = useState("flash");
  const router = useRouter();

  const searchMovie = function (e: any) {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const onFormSubmit = async function (e: any) {
    e.preventDefault();
    localStorage.setItem('search', searchValue)
    const current = localStorage.getItem('search')
    router.replace("/search");
    searchMovieFunction(current)
  };

  const goBackToHomePage = function(){
    router.push("/");
  }

  return (
    <StyledHeader>
      <h1 onClick={() => goBackToHomePage()}>
        <span>i</span> Movies
      </h1>
      <form onSubmit={onFormSubmit}>
        <StyledInput
          type="search"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => searchMovie(e)}
        />
      </form>
    </StyledHeader>
  );
}

export default Header;
