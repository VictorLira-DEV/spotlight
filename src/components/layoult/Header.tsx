import { StyledHeader, StyledInput } from '../styles/Header.styled';
import React, { useState } from 'react';
import { useContext } from 'react';
import { SearchPageContext } from '../../context/searchMovieinput';
import { useRouter } from 'next/router';

function Header() {
  const { searchMovieFunction } = useContext(SearchPageContext);
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const searchMovie = function (e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    setSearchValue(e.currentTarget.value);
  };

  const onFormSubmit = async function (e: React.FormEvent) {
    e.preventDefault();
    localStorage.setItem('search', searchValue);
    const current = localStorage.getItem('search')!;
    router.replace('/search');
    searchMovieFunction(current);
    setSearchValue('');
  };

  const goBackToHomePage = function () {
    router.push('/');
  };

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
          onChange={e => searchMovie(e)}
        />
      </form>
    </StyledHeader>
  );
}

export default Header;
