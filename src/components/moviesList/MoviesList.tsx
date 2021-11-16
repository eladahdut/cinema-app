import Box from "@mui/material/Box";
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}>
        <h1
          style={{ margin: "2.8rem 0 0.25rem 0", color: "rgb(117, 16, 247)" }}>
          Movies List
        </h1>
      </Box>
      <hr style={{ width: "2%", border: "1px solid rgb(117 16 247 / 70%)" }} />
      <div className="mov-container">
        {moviesContext?.moviesData?.results.map((card, i) => {
          return <MovieCard key={i} card={card} />;
        })}
      </div>
    </div>
  );
}
