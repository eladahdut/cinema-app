import NavigationBar from "./components/navbar/NavigationBar.tsx";
import MoviesList from "./components/moviesList/MoviesList";
import MoviesDataProvider from "./context/moviesContext";
import Box from "@mui/material/Box";
import "./styles.scss";

function App() {
  return (
    <MoviesDataProvider>
      <NavigationBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1 style={{ margin: "1rem 0 0.25rem 0", color: "rgb(117, 16, 247)" }}>
          coco jumbo
        </h1>
      </Box>
      <hr style={{ width: "2%", border: "1px solid rgb(117 16 247 / 70%)" }} />
      <MoviesList />
    </MoviesDataProvider>
  );
}

export default App;
