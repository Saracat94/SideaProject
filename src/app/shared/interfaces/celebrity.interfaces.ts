export interface Celebrity {
    id: string;
    name: string;
    birthYear: number;
    deathYear?: number;
    movies?: MovieCelebrity[];
  }
  
  export interface MovieCelebrity {
    celebrityName: string;
    celebrityId: string;
    movieTitle: string;
    movieId: string;
    category: string;
    characters: string;
  }
  