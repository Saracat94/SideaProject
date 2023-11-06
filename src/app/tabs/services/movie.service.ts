import { Injectable } from "@angular/core";
import { Observable, Subject, map, switchMap } from "rxjs";
import { Movie, ResponseDto } from "src/app/shared/interfaces/movie.interfaces";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    private _baseUrl = '';

    constructor(private readonly _http: HttpClient) {
        this._baseUrl = environment.baseUrl;
    }


    private movies_list: Movie[] = [
        {
            id: "tt0120804",
            title: "Il Signore degli Anelli: La Compagnia dell'Anello",
            year: 2001,
            runningTime: 178,
            genres: "Fantasy, Avventura",
            cast: [],
            rating: {},
            country: []
        },
        {
            id: "tt0068646",
            title: "Il Padrino",
            year: 1972,
            runningTime: 175,
            genres: "Crime, Dramma",
            cast: [],
            rating: {},
            country: []
        },
        {
            id: "tt0109830",
            title: "Forrest Gump",
            year: 1994,
            runningTime: 142,
            genres: "Dramma, Romantico",
            cast: [],
            rating: {},
            country: []
        },
        {
            id: "tt0110912",
            title: "Pulp Fiction",
            year: 1994,
            runningTime: 154,
            genres: "Crime, Dramma",
            cast: [],
            rating: {},
            country: []
        },
        {
            id: "tt0076759",
            title: "Star Wars: Una nuova speranza",
            year: 1977,
            runningTime: 121,
            genres: "Fantasy, Sci-Fi",
            cast: [],
            rating: {},
            country: []
        }
    ];



    private movieList = new Subject<Movie[]>();

    MovieListObs = this.movieList.asObservable();

    getList(title: string, page = 0): Observable<Movie[]> {
        return this._http.get<ResponseDto<Movie[]>>(`${this._baseUrl}/movies?order_by=id&page=${page}&size=25&title=${title}`).pipe(
            map(
                (result: any) => {
                    return result.movies;
                }
            )
        );
    }

    getById(id: string): Observable<Movie> {
        return this._http.get<Movie>(`${this._baseUrl}/movies/${id}`)
    }

    update(updatedMovie: Movie): Observable<Movie> {
        return this._http.put<Movie>(
            `${this._baseUrl}/movies/${updatedMovie.id}`, updatedMovie);
    }

    private _numId = this.movies_list.length;

    create(createdMovie: Movie): Observable<Movie> {
        const newId = `tt${(this._numId + 1).toString().padStart(7, '0')}`;
        this._numId += 1;
        const newMovie: Movie = {
            id: newId,
            title: createdMovie.title,
            year: createdMovie.year,
            runningTime: createdMovie.runningTime,
            genres: createdMovie.genres,
            // cast: [],
            rating: {
                averageRating: 0,
                numVotes: 0
            },
            // country: []
        };

        return this._http.post<Movie>(`${this._baseUrl}/movies`, newMovie);
    }

    delete(id: string): Observable<Movie> {
        return this._http.delete<Movie>(`${this._baseUrl}/movies/${id}`);
    }
}