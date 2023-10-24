import { Observer, Subject, from } from 'rxjs';
import { Component } from '@angular/core';
import { Movie } from '../shared/interfaces/movie.interfaces';
import { MovieService } from '../tabs/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: 'movie.page.html',
  styleUrls: ['movie.page.scss']
})
export class MoviePage {

  movie_list: Movie[] = [];

  data_type: string = "movie";

  constructor(private movieService: MovieService,
    private readonly _router: Router,
    private route: ActivatedRoute) {
    // this.movie_list = this.movieService.getList();
    this.movieService.MovieListObs.subscribe((movie_list: Movie[]) => {
      this.movie_list = movie_list.map((movie: Movie) => {
        return {
          id: movie.id,
          title: movie.title,
          year: movie.year,
          runningTime: movie.runningTime,
          genres: movie.genres
        };
      });
    });

    this.movieService.getList();
  };

  clickItemEdit() {
    this._router.navigate(['create'], { relativeTo: this.route });
  }

}




