import NavigationBar from './components/navbar/NavigationBar.tsx';
import MoviesList from './components/moviesList/MoviesList';
import MoviesDataProvider from './context/moviesContext'
import './styles.scss';

function App() {
  return (
    <MoviesDataProvider>
      <NavigationBar />
      <MoviesList />
    </MoviesDataProvider>
  );
}

export default App;
