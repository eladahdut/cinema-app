import { useState, createContext, useContext } from "react";
import { CardData, MoviesData, MyContext } from "../lib/models";

export const MoviesContext = createContext<MyContext>({
  searchVal: "",
  setSearchValue: (value: string) => {},
  moviesData: null,
  setMoviesList: (list: any) => {},
  favoriteMovies: [],
  setFavoriteMovies: (fav: CardData) => {},
});

export const useCont = () => {
  return useContext(MoviesContext);
};

const MoviesDataProvider = (props: any) => {
  const [moviesData, setMoviesData] = useState<MoviesData | null>(null);
  const [searchVal, setSearchVal] = useState("");
  const [favoriteMovies, setFavorites] = useState<CardData[]>([]);

  const setMoviesList = (list: any): void => {
    setMoviesData(list);
  };
  const setSearchValue = (val: string): void => {
    setSearchVal(val);
  };
  const setFavoriteMovies = (movieObj: CardData): void => {
    setFavorites((prevState) => [...prevState, movieObj]);
  };

  return (
    <MoviesContext.Provider
      value={{
        searchVal,
        setSearchValue,
        moviesData,
        setMoviesList,
        favoriteMovies,
        setFavoriteMovies,
      }}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesDataProvider;
