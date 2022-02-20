import React, { ReactNode, useState } from "react";

interface Iprops {
  children: ReactNode;
}

export const SearchPageContext = React.createContext({
  searchMovieValue: '',
  searchMovieFunction: (a: any) => {},
});

export const SearchPageProvider = function (props: Iprops) {
  const [searchMovie, setSearchMovie] = useState<any>();

  const casaddd = function (inputValue: any) {
    setSearchMovie(inputValue);
  };

  const values: any = {
    searchMovieFunction: casaddd,
    searchMovieValue: searchMovie,
  };

  return (
    <SearchPageContext.Provider value={values}>
      {props.children}
    </SearchPageContext.Provider>
  );
};

export default SearchPageProvider;
