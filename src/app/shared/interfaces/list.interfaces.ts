export interface Item {
    //questa è l'interfaccia di Movie
    id: string;
    title?: string;
    year?: number;
    runningTime?: number;
    genres?: string;
    cast?: MovieCelebrity[];
    rating?: Rating;
    country?: Country[];
    //questa è l'interfaccia di Celebrity
    name?: string;
    birthYear?: number;
    deathYear?: number;
    movies?: MovieCelebrity[];
}

export interface MovieCelebrity {
    // Definisci le proprietà dell'attore/celebrità qui
}

export interface Rating {
    // Definisci le proprietà relative al rating qui
}

export interface Country {
    // Definisci le proprietà relative al paese qui
}
