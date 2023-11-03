import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RangeCustomEvent } from '@ionic/angular';
import { BehaviorSubject, switchMap } from 'rxjs';
import { Item } from '../shared/interfaces/list.interfaces';
import { Movie } from '../shared/interfaces/movie.interfaces';
import { MovieService } from '../tabs/services/movie.service';
import { RangeComponent } from '../shared/components/range/range.component';

@Component({
  selector: 'app-movie',
  templateUrl: 'movie.page.html',
  styleUrls: ['movie.page.scss'],
})
export class MoviePage {
  movie_list: Item[] = [];
  fullMovieList: Item[] = [];
  rating$ = new BehaviorSubject<number>(0);
  search$ = new BehaviorSubject<string>('');
  @ViewChild(RangeComponent) rating! : RangeComponent

  orderTo: string = '';

  titlePage: string = 'Movie';

  constructor(
    private _movieService: MovieService,
    private readonly _router: Router,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    // prendo il valore di search$ inizialmente vuoto ''
    this.search$
      .pipe(
        // questo valore sarà il title che verrà poi immesso nella get del service
        switchMap((title) => {
          return this._movieService.getList(title);
        }),
        // avuta la lista dalla chiamata, la mappo per la lista Item[]
        switchMap((movies) => {
          this.fullMovieList = movies.map((movie: Movie) => {
            return {
              id: movie.id,
              name: movie.title,
              rating: (movie.rating?.averageRating || 0) / 10,
              cast: movie.cast,
              year: movie.year
            };
          });
          // fatto il map() ritorno il rating che avrà inizialmente valore 0
          return this.rating$;
        })
      )
      .subscribe((rating) => {
        // sottoscrivo e con il rating filtro la lista
        this._getListWithRating(rating);
      });
  }
  // prendo il valore emesso e lo inserisco nel BehaviorSubject con next()
  searchInput(inputValue: string) {
    this.search$.next(inputValue);
  }

  ratingRange(rating: Event) {
    this.rating$.next(Number((rating as RangeCustomEvent).detail.value));
  }

  private _getListWithRating(rating: number) {
    this.movie_list = this.fullMovieList.filter(
      (movie) => (movie.rating || 0) > rating / 10
    );
  }

  clickItemCreate() {
    this._router.navigate(['create'], { relativeTo: this.route });
  }

  clickItem(id: string) {
    this._router.navigate(['detail', id], { relativeTo: this.route });
  }

  clickItemEdit(id: string) {
    this._router.navigate(['edit', id], { relativeTo: this.route });
  }

  clickItemRemove(id: string) {
    this._movieService.delete(id).subscribe((selectedMovie: Movie) => {
      // this._getList();
    });
  }

  handleChange(event: any) {
    console.log(event);
    this.orderTo = event.detail.value;
  }
}
