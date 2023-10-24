import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../interfaces/list.interfaces';
import { MovieService } from 'src/app/tabs/services/movie.service';
import { CelebrityService } from 'src/app/tabs/services/celebrity.service';



@Component({
    selector: 'app-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.scss'],
})
export class ListComponent {

    @Input() items_list: Item [] = [];

    @Output() clickItem = new EventEmitter<string>();
    @Output() clickItemRemove = new EventEmitter<string>();
    @Output() clickItemEdit = new EventEmitter<string>();


}