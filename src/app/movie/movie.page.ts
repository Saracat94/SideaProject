import { Observer, Subject, from } from 'rxjs';
import { Component } from '@angular/core';
import { Movie } from '../shared/interfaces/movie.interfaces';
import { MovieService } from '../tabs/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../shared/interfaces/list.interfaces';

@Component({
  selector: 'app-movie',
  templateUrl: 'movie.page.html',
  styleUrls: ['movie.page.scss']
})
export class MoviePage {

  movie_list: Item[] = [];

  data_type: string = "movie";

  constructor(private _movieService: MovieService,
    private readonly _router: Router,
    private route: ActivatedRoute) {
    // this.movie_list = this.movieService.getList();
    this._movieService.MovieListObs.subscribe((movie_list: Movie[]) => {
      this.movie_list = movie_list.map((movie: Movie) => {
        return {
          id: movie.id,
          name: movie.title
        };
      });
    });

    this._movieService.getList();
  };

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
    this._movieService.delete(id);
    this._router.navigate([''], { relativeTo: this.route });
}
}




