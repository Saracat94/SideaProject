import { Component } from '@angular/core';
import { Movie } from '../shared/interfaces/movie.interfaces';
import { MovieService } from '../tabs/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: 'movie.page.html',
  styleUrls: ['movie.page.scss']
})
export class MoviePage {

  movie_list: Movie[] = [];

  constructor(private movieService: MovieService,) {
      this.movie_list = this.movieService.getList();
  }
}
