import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Movie } from '../../interfaces/movie.interfaces';
import { MovieService } from 'src/app/tabs/services/movie.service';
import { Item } from '../../interfaces/list.interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss'],
})
export class FooterComponent {
  // selectedMovieId: string | undefined;
  @Input() movieDetail: Item | undefined;

  constructor(private _router: Router,
    private _route: ActivatedRoute){
  //   if (this.selectedMovieId) {
  //     this._movieService.getById(this.selectedMovieId).subscribe((result: Movie) => {
  //         this.movie = result;
  //     })
  // }
  }

  seeMovieDetail(id: string){
    this._router.navigate(['detail', id], { relativeTo: this._route });
  }
}
