import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movie.interfaces';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-mlist',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.scss'],
})
export class MovieListComponent {

    @Input() movie_list: Movie[] = [];

    constructor(private readonly _router: Router,
        private route:ActivatedRoute) {

    }

    clickMovie(id: string) {
        this._router.navigate(['detail', id], {relativeTo:this.route});
      }

}