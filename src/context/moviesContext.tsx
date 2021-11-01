import { useState, createContext, useContext } from "react";

export const MoviesContext = createContext({
  moviesData,
  setMoviesList: (list: any) => {},
});



export const useCont = () => {
  return useContext(MoviesContext);
};

const MoviesDataProvider = (props: any) => {
  const [moviesData, setMoviesData] = useState([]);

  const setMoviesList = (list: any) => {
    setMoviesData(list)
  }

  return (
    <MoviesContext.Provider value={{ moviesData, setMoviesList}}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesDataProvider;
