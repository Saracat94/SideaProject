import { Injectable } from "@angular/core";
import { Observable, Subject, map } from "rxjs";
import { Movie } from "src/app/shared/interfaces/movie.interfaces";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    constructor(private readonly _http: HttpClient){
        this._baseUrl = environment.baseUrl;
    }

    private _baseUrl = '';

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

    
    
    private movieList = new Subject<Movie[]>();
    
    MovieListObs = this.movieList.asObservable();
    
    getList(): Observable<Movie[]> {
        return this._http.get<Movie[]>(`${this._baseUrl}/movies?order_by=id&page=0&size=25`).pipe(map((result: any) => {
            return result.movies;
        }));

    }

    getById(id: string): Observable<Movie>{
        return this._http.get<Movie>(`${this._baseUrl}/movies/${id}`)
    }
        
    // getById(id: string): Movie | undefined {
    //         const movie = this.movies_list.find((movie: Movie) => movie.id === id);
    //         return movie;
    // }
    
    

    update(updatedMovie: Movie): void {
        const index = this.movies_list.findIndex((movie: Movie) => movie.id === updatedMovie.id);
        if (index !== -1) {
            this.movies_list[index] = updatedMovie;
        }

        this.movieList.next(this.movies_list)
    }
    
    private _numId = this.movies_list.length;
    
    create(createdMovie: Movie) {
        const newId = `tt${(this._numId + 1).toString().padStart(7, '0')}`;
        this._numId += 1;
        this.movies_list.push({
            id: newId,
            title: createdMovie.title,
            year: createdMovie.year,
            runningTime: createdMovie.runningTime,
            genres: createdMovie.genres
        })
        this.movieList.next(this.movies_list);
    }

    delete(id: string): void {
        const index = this.movies_list.findIndex((m: Movie) => m.id === id);
        if (index !== -1) {
            this.movies_list.splice(index, 1);
            this.movieList.next(this.movies_list);
        }
    }
}