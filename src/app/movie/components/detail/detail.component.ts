import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie.interfaces';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/tabs/services/movie.service';



@Component({
    selector: 'app-mdetail',
    templateUrl: 'detail.component.html',
    styleUrls: ['detail.component.scss'],
})
export class MovieDetailComponent {

    selectedMovieId: string | undefined;
    movie: Movie | undefined;

    constructor(private _route: ActivatedRoute,
        private _movieService: MovieService) {
        this._route.params.subscribe(params => {
            this.selectedMovieId = params['id'];
            if (this.selectedMovieId) {
                this.movie = this._movieService.getById(this.selectedMovieId)
            }
        });

    }
}