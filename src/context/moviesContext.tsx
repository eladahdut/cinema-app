import { useState, createContext, useContext } from "react";

export const MoviesContext = createContext({
  moviesData: {},
});

export const useCont = () => {
  return useContext(MoviesContext);
};

const MoviesDataProvider = (props: any) => {
  const [moviesData, setMoviesData] = useState([]);

  return (
    <MoviesContext.Provider value={{ moviesData }}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesDataProvider;
