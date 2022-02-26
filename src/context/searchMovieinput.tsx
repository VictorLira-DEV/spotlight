import React, { ReactNode, useState } from "react";

interface Iprops {
  children: ReactNode;
}

export const SearchPageContext = React.createContext({
  searchMovieValue: "",
  searchMovieFunction: (arg: string) => {},
});

export const SearchPageProvider = function (props: Iprops) {
  const [searchMovie, setSearchMovie] = useState("");

  const casaddd = function (inputValue: string) {
    setSearchMovie(inputValue);
  };

  const values = {
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
