import { Injectable } from "@angular/core";
import { Movie } from "src/app/shared/interfaces/movie.interfaces";


@Injectable({
    providedIn: 'root'
})
export class MovieService {

    private movies_list: Movie[] = [
        {
            id: "tt0120804",
            title: "Il Signore degli Anelli: La Compagnia dell'Anello",
            year: 2001,
            runningTime: 178,
            genres: "Fantasy, Avventura",
            cast: [],
            rating: {
                // Inserire le proprietà relative al rating qui
            },
            country: []
        },
        {
            id: "tt0068646",
            title: "Il Padrino",
            year: 1972,
            runningTime: 175,
            genres: "Crime, Dramma",
            cast: [],
            rating: {
                // Inserire le proprietà relative al rating qui
            },
            country: []
        },
        {
            id: "tt0109830",
            title: "Forrest Gump",
            year: 1994,
            runningTime: 142,
            genres: "Dramma, Romantico",
            cast: [],
            rating: {
                // Inserire le proprietà relative al rating qui
            },
            country: []
        },
        {
            id: "tt0110912",
            title: "Pulp Fiction",
            year: 1994,
            runningTime: 154,
            genres: "Crime, Dramma",
            cast: [],
            rating: {
                // Inserire le proprietà relative al rating qui
            },
            country: []
        },
        {
            id: "tt0076759",
            title: "Star Wars: Una nuova speranza",
            year: 1977,
            runningTime: 121,
            genres: "Fantasy, Sci-Fi",
            cast: [],
            rating: {
                // Inserire le proprietà relative al rating qui
            },
            country: []
        }
    ];

    getList(): Movie[] {
        return this.movies_list;
    }

    getById(id: string): Movie | undefined {
        const movie = this.movies_list.find((movie: Movie) => movie.id === id);
        return movie;
    }

    update(updatedMovie: Movie): void {
        const index = this.movies_list.findIndex((movie: Movie) => movie.id === updatedMovie.id);
        if (index !== -1) {
            this.movies_list[index] = updatedMovie;
        }
    }
}