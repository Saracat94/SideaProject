import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../interfaces/list.interfaces';
import { MovieCelebrity } from '../../interfaces/movie.interfaces';

@Component({
    selector: 'app-links',
    templateUrl: 'links.component.html',
    styleUrls: ['links.component.scss'],
})
export class LinksComponent {

    @Input() list: MovieCelebrity[] = [];
    @Input() isMovie: boolean = true;

    // @Output() clickItem = new EventEmitter<string>();
    // @Output() clickItemRemove = new EventEmitter<string>();
    // @Output() clickItemEdit = new EventEmitter<string>();


}