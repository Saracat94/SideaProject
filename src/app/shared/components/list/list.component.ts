import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../interfaces/list.interfaces';
import { Celebrity } from '../../interfaces/celebrity.interfaces';
import { Movie } from '../../interfaces/movie.interfaces';


@Component({
    selector: 'app-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.scss'],
})
export class ListComponent {

    @Input() items_list: Item [] = [];
    @Input() data_type: string = "";


    constructor(private readonly _router: Router,
        private route: ActivatedRoute) {

    }

    clickItem(id: string) {
        this._router.navigate(['detail', id], { relativeTo: this.route });
    }

    clickItemEdit(id: string) {
        this._router.navigate(['edit', id], { relativeTo: this.route });
    }


}