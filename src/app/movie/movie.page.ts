import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RangeCustomEvent, SelectCustomEvent } from '@ionic/angular';
import { BehaviorSubject, switchMap } from 'rxjs';
import { Item } from '../shared/interfaces/list.interfaces';
import { Movie } from '../shared/interfaces/movie.interfaces';
import { MovieService } from '../tabs/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: 'movie.page.html',
  styleUrls: ['movie.page.scss'],
})
export class MoviePage {
  movieSelected: Item | undefined;
  movie_list: Item[] = [];
  fullMovieList: Item[] = [];
  rating$ = new BehaviorSubject<number>(0);
  search$ = new BehaviorSubject<string>('');
  orderTo: string = '';
  titlePage: string = 'Movie';

  constructor(
    private _movieService: MovieService,
    private readonly _router: Router,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    this.search$
      .pipe(
        switchMap((title) => {
          return this._movieService.getList(title);
        }),
        switchMap((movies) => {
          this.fullMovieList = movies.map((movie: Movie) => {
            return {
              id: movie.id,
              name: movie.title,
              rating: (movie.rating?.averageRating || 0) / 10,
              cast: movie.cast,
              year: movie.year,
            };
          });
          return this.rating$;
        })
      )
      .subscribe((rating) => {
        return this._getListWithRating(rating);
      });
  }
  searchInput(inputValue: string) {
    this.search$.next(inputValue);
  }

  ratingRange(rating: number) {
    this.rating$.next(rating);
  }

  private _getListWithRating(rating: number) {
    this.movie_list = this.fullMovieList.filter((movie) => (movie.rating || 0) > rating / 10);
  }

  clickItemCreate() {
    this._router.navigate(['create'], { relativeTo: this.route });
  }

  clickItem(id: string) {
    this.movieSelected = this.movie_list.find((movie) => movie.id === id);
    // this._router.navigate(['detail', id], { relativeTo: this.route });
  }

  clickItemEdit(id: string) {
    this._router.navigate(['edit', id], { relativeTo: this.route });
  }

  clickItemRemove(id: string) {
    this._movieService.delete(id).subscribe((selectedMovie: Movie) => {
      // this._getList();
    });
  }
  sortByRating(order: string) {
    return this.orderTo = order;
  }
}
