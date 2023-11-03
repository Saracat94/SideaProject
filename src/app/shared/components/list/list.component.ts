import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from '../../interfaces/list.interfaces';
import { RatingBarComponent } from '../rating_bar/ratingbar.component';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent {
  @Input() items_list: Item[] = [];

  @Output() clickItem = new EventEmitter<string>();
  @Output() clickItemRemove = new EventEmitter<string>();
  @Output() clickItemEdit = new EventEmitter<string>();
  @Output() searchInput = new EventEmitter<string>();

  // dichiaro il FormGroup del componente la tipizzazione avverrà all'interno del costruttore assieme all'inizializzazione
  formSearch;

  constructor() {
    // inizializzo il formGroup con all'interno la searchbar con attributo formControlName = "research"
    this.formSearch = new FormGroup({
      research: new FormControl('', {nonNullable: true}),
    });
    // prendo il value della searchbar e con il valueChanges restituisco un Observable con quel valore
    this.formSearch
      .get('research')
      ?.valueChanges.subscribe((inputValue: string) => {
        console.log(inputValue);
        // con la sottoscrizione prendo il valore di input e lo emetto con l'EventEmitter
        this.searchInput.emit(inputValue);
      });
  }

}
