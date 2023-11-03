export interface Movie {
  id: string;
  title: string;
  year: number;
  runningTime: number;
  genres: string;
  cast?: MovieCelebrity[];
  rating?: Rating;
  country?: Country[];
}

export interface ResponseDto<T = any> {
  movies: T[];
  pagination: {
    currentPage: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
  };
}

export interface MovieCelebrity {
  celebrityName: string;
  celebrityId: string;
  movieTitle: string;
  movieId: string;
  category: string;
  characters: string;
}

export interface Rating {
  averageRating?: number;
  numVotes?: number;
}

export interface Country {
  title: string;
  region: string;
  language: string;
}
