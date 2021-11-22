export interface MoviesData {
  page: number;
  results: CardData[];
  total_pages: number;
  total_results: number;
}

export interface CardData {
  adult: boolean;
  backdrop_path: any;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MyContext {
  searchVal: string;
  setSearchValue: (value: string) => void;
  moviesData: MoviesData | null;
  setMoviesList: (list: any) => void;
  favoriteMovies: CardData[];
  setFavoriteMovies: (fav: CardData) => void;
  favoritesFlag: boolean;
  setFlag: (opositeFlag: boolean) => void;
}
