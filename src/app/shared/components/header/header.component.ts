import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../interfaces/list.interfaces';
import { MovieService } from 'src/app/tabs/services/movie.service';
import { CelebrityService } from 'src/app/tabs/services/celebrity.service';



@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss'],
})
export class HeaderComponent {

    @Input() title = '';
    @Input() showAdd = false;
    @Input() showBack = true;

    @Output() addEvent = new EventEmitter<void>();

    clickItemCreate(){
        this.addEvent.emit()
    }

}