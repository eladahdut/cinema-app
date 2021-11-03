import { useState, createContext, useContext } from "react";

export const MoviesContext = createContext({
  searchVal: "",
  setSearchValue: (value: string) => {},
  moviesData: [],
  setMoviesList: (list: any) => {},
});

export const useCont = () => {
  return useContext(MoviesContext);
};

const MoviesDataProvider = (props: any) => {
  const [moviesData, setMoviesData] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  const setMoviesList = (list: any) => {
    setMoviesData(list);
  };
  const setSearchValue = (val: string) => {
    setSearchVal(val);
  };

  return (
    <MoviesContext.Provider
      value={{ searchVal, setSearchValue, moviesData, setMoviesList }}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesDataProvider;
