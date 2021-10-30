import NavigationBar from './components/navbar/NavigationBar.tsx';
import MoviesList from './components/moviesList/MoviesList';
import MoviesDataProvider, { useCont } from './context/moviesContext'

function App() {
  const x = useCont();
  console.log(x);
  return (
    <MoviesDataProvider>
      <NavigationBar />
      <MoviesList />
    </MoviesDataProvider>

  );
}

export default App;
