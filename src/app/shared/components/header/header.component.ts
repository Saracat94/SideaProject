import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent {
  @Input() title = '';
  @Input() showAdd = false;
  @Input() showBack = true;
  @Input() showRange = false;
  @Input() showOrderTo = false;

  @Output() addEvent = new EventEmitter<void>();
  @Output() searchInput = new EventEmitter<string>();
  @Output() orderChange = new EventEmitter<string>();
  

  formSearch;

  constructor() {
    this.formSearch = new FormGroup({
      research: new FormControl('', { nonNullable: true }),
    });

    this.formSearch
      .get('research')
      ?.valueChanges.subscribe((inputValue: string) => {
        console.log(inputValue);

        this.searchInput.emit(inputValue);
      });
  }

  clickItemCreate() {
    this.addEvent.emit();
  }

}
