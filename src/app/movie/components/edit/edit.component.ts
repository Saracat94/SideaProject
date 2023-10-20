import { Component, Input } from '@angular/core';
import { Movie } from '../../../shared/interfaces/movie.interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/tabs/services/movie.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
    selector: 'app-medit',
    templateUrl: 'edit.component.html',
    styleUrls: ['edit.component.scss'],
})
export class MovieEditComponent {

    selectedMovieId: string | undefined;
    movie: Movie | undefined;
    formUser: FormGroup | undefined;

    constructor(private _route: ActivatedRoute,
        private _movieService: MovieService,
        private _location: Location) {
        this._route.params.subscribe(params => {
            this.selectedMovieId = params['id'];
            if (this.selectedMovieId) {
                this.movie = this._movieService.getById(this.selectedMovieId);
                this._setForm();
            }
        });
    }

    private _setForm() {
        this.formUser = new FormGroup({
            id: new FormControl(this.movie?.id, Validators.required),
            title: new FormControl(this.movie?.title, Validators.required),
            year: new FormControl(this.movie?.year, Validators.required),
            runningTime: new FormControl(this.movie?.runningTime, Validators.required),
            genres: new FormControl(this.movie?.genres, Validators.required)
        });
    }
    submitForm() {
        console.log(this.formUser)
        if(this.formUser?.valid){
            this._movieService.update(this.formUser?.value);
            this._location.back();
        }
    }
}
