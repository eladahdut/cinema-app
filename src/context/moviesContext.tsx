import { useState, createContext, useContext } from "react";
import { CardData, MoviesData, MyContext } from "../lib/models";

export const MoviesContext = createContext<MyContext>({
  searchVal: "",
  setSearchValue: (value: string) => {},
  moviesData: null,
  setMoviesList: (list: any) => {},
  favoriteMovies: [],
  setFavoriteMovies: (fav: []) => {},
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
  const setFavoriteMovies = (movieObj: any): void => {
    setFavorites(movieObj);
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

// {
//   adult: boolean,
//   backdrop_path: any,
//   genre_ids: []number,
//   id: number,
//   original_language: string,
//   original_title: string,
//   overview: string,
//   popularity: number,
//   poster_path: string,
//   release_date: string,
//   title: string,
//   video: boolean,
//   vote_average: number,
//   vote_count: number,
// }
