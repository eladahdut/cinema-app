import NavigationBar from './components/navbar/NavigationBar.tsx';
import MoviesList from './components/moviesList/MoviesList';
import MoviesDataProvider from './context/moviesContext'
import './styles.scss';
import PositionedSnackbar from './components/snackbar/SnackBar';

function App() {
  return (
    <MoviesDataProvider>
      <NavigationBar />
      <MoviesList />
      <PositionedSnackbar />
    </MoviesDataProvider>
  );
}

export default App;
