import { Component } from '@angular/core';
import { Celebrity } from '../shared/interfaces/celebrity.interfaces';
import { CelebrityService } from '../tabs/services/celebrity.service';

@Component({
  selector: 'app-celebrity',
  templateUrl: 'celebrity.page.html',
  styleUrls: ['celebrity.page.scss']
})
export class CelebrityPage {

  celebrities_list: Celebrity[] = []

  constructor(private celebrityService: CelebrityService) {
    this.celebrities_list = this.celebrityService.getList();
  }

}
