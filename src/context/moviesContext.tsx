import { useState, createContext, useContext } from "react";
import { CardData, MoviesData, MyContext } from "../lib/models";

export const MoviesContext = createContext<MyContext>({
  searchVal: "",
  setSearchValue: (value: string) => {},
  moviesData: null,
  setMoviesList: (list: any) => {},
  favoriteMovies: [],
  setFavoriteMovies: (fav: CardData) => {},
  favoritesFlag: false,
  setFlag: () => {},
});

export const useCont = () => {
  return useContext(MoviesContext);
};

const MoviesDataProvider = (props: any) => {
  const [moviesData, setMoviesData] = useState<MoviesData | null>(null);
  const [searchVal, setSearchVal] = useState("");
  const [favoriteMovies, setFavorites] = useState<CardData[]>([]);
  const [favoritesFlag, setFavoritesFlag] = useState(false);

  const setMoviesList = (list: any): void => {
    setMoviesData(list);
  };
  const setSearchValue = (val: string): void => {
    setSearchVal(val);
  };
  const setFavoriteMovies = (movieObj: CardData): void => {
    const found = favoriteMovies.find((movie) => movie.id === movieObj.id);
    if (!found) {
      setFavorites((prevState) => [...prevState, movieObj]);
    } else {
      alert(`movie with id ${movieObj.id} already exists`);
    }
  };
  const setFlag = (): void => {
    setFavoritesFlag(!favoritesFlag);
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
        favoritesFlag,
        setFlag,
      }}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesDataProvider;
