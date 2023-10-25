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

  titlePage: string = "Movie";

  constructor(private _movieService: MovieService,
    private readonly _router: Router,
    private route: ActivatedRoute) {};

  private _getList() {
    this._movieService.getList().subscribe((movies: Movie[]) => {
      this.movie_list = movies.map((movie: Movie) => {
        return {
          id: movie.id,
          name: movie.title
        };
      });
    });
  }

  ionViewWillEnter() {
    this._getList();
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
      this._getList();
    });
  }
}




