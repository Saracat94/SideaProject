import { Observer, Subject, from } from 'rxjs';
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
  
  data_type: string = "movie";  
  
  constructor(private movieService: MovieService,) {
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

  
  }

 
 

