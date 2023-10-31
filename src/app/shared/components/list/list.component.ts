import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../interfaces/list.interfaces';





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