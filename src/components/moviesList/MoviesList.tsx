import { useEffect } from "react";
import { useCont } from "../../context/moviesContext";
import { getData } from "../../lib/api";
import MovieCard from "../movieCard/MovieCard";
import "./moviesList.scss";

export default function MoviesList() {
  const moviesContext = useCont();

  useEffect(() => {
    async function setMovies(val: string) {
      const data = await getData(val);
      moviesContext.setMoviesList(data);
    }
    if (moviesContext.searchVal.length > 1) {
      setMovies(moviesContext.searchVal);
    }
  }, [moviesContext.searchVal]);

  return (
    <div
      style={{
        flex: "1",
        overflow: "hidden auto",
      }}>
      <div className="mov-container">
        {moviesContext.favoritesFlag
          ? !!moviesContext?.favoriteMovies?.length
            ? moviesContext?.favoriteMovies.map((card, i) => {
                return <MovieCard key={i} card={card} />;
              })
            : "No favorites yet"
          : !!moviesContext?.moviesData?.results?.length
          ? moviesContext?.moviesData?.results.map((card, i) => {
              return <MovieCard key={i} card={card} />;
            })
          : "Search for movies"}

        {/* {!!moviesContext?.moviesData?.results?.length
          ? moviesContext?.moviesData?.results.map((card, i) => {
              return <MovieCard key={i} card={card} />;
            })
          : "Search for movies"} */}
      </div>
    </div>
  );
}
