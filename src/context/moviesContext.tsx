import { useState, createContext, useContext } from "react";

export const MoviesContext = createContext({
  searchVal: "",
  setSearchValue: (value: string) => {},
  moviesData: {
    page: Number,
    results: [],
    total_pages: Number,
    total_results: Number,
  },
  setMoviesList: (list: any) => {},
  favoriteMovies: {},
  setFavoriteMovies: (fav: {}) => {},
});

export const useCont = () => {
  return useContext(MoviesContext);
};

const MoviesDataProvider = (props: any) => {
  const [moviesData, setMoviesData] = useState({
    page: Number,
    results: [],
    total_pages: Number,
    total_results: Number,
  });
  const [searchVal, setSearchVal] = useState("");
  const [favoriteMovies, setFavoriteMovies] = useState({});

  const setMoviesList = (list: any) => {
    setMoviesData(list);
  };
  const setSearchValue = (val: string) => {
    setSearchVal(val);
  };
  const setFavorites = (movieObj: any): any => {
    setFavoriteMovies(movieObj);
  };

  return (
    <MoviesContext.Provider
      value={{
        searchVal,
        setSearchValue,
        moviesData,
        setMoviesList,
        favoriteMovies,
        setFavorites,
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
