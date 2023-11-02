import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../interfaces/list.interfaces';
import { FormControl, FormGroup } from '@angular/forms';
import { debounce, debounceTime } from 'rxjs';

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

  formSearch: FormGroup;

  constructor(){
    this.formSearch = new FormGroup({
      research: new FormControl()
    });
    this.formSearch.get('research')?.valueChanges.subscribe((inputValue: string) => {
      console.log(inputValue);
      this.searchInput.emit(inputValue); 
    })
  }

}
