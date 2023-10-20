import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../interfaces/movie.interfaces';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-mlist',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.scss'],
})
export class ListComponent {

    @Input() movie_list: Movie[] = [];
    @Output() celebrityDetails: EventEmitter<number> = new EventEmitter<number>;
    @Output() celebrityEdits: EventEmitter<number> = new EventEmitter<number>;


    constructor(private readonly _router: Router,
        private route:ActivatedRoute) {

    }

    // celebrityEdit(id: string) {
    //   this.celebrityEdits.emit(id);
    //   }

    //   celebrityDetail(id: string) {
    //     this.celebrityDetails.emit(id);
    //   }

}