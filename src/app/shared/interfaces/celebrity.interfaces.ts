export interface Celebrity {
    id: string;
    name: string;
    birthYear: number;
    deathYear?: number;
    movies?: MovieCelebrity[];
  }
  
  export interface MovieCelebrity {
    // Definisci le proprietà di MovieCelebrity
  }
  