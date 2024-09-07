// import { httpGetFavoritesMovies } from '@/common/http/httpUser';
export interface MoviesIF {
  adult: boolean;
  backdrop_path: string; ///"/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg",
  genre_ids: any[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string; ///"/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MoviesDataIF {
  page: number;
  results: MoviesIF[];
  total_results: number;
  total_pages: number;
  selectedSpot: MoviesIF;
}
export interface userInfo {
    userInfo: any;
}
export interface AuthState {
  isAuthenticated: boolean;
  user: userInfo | null;
}


  