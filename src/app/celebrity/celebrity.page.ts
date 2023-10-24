import { Component } from '@angular/core';
import { Celebrity } from '../shared/interfaces/celebrity.interfaces';
import { CelebrityService } from '../tabs/services/celebrity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../shared/interfaces/list.interfaces';

@Component({
  selector: 'app-celebrity',
  templateUrl: 'celebrity.page.html',
  styleUrls: ['celebrity.page.scss']
})
export class CelebrityPage {

  celebrities_list: Item[] = [];

  data_type: string = "celebrity";

  constructor(private _celebrityService: CelebrityService,
    private readonly _router: Router,
    private route: ActivatedRoute) {

    this._celebrityService.CelebrityListObs.subscribe((celebrity_list: Celebrity[]) => {
      this.celebrities_list = celebrity_list.map((celebrity: Celebrity) => {
        return {
          id: celebrity.id,
          name: celebrity.name
        };
      });
    });

    this._celebrityService.getList();

  }

  clickItemCreate() {
    this._router.navigate(['create'], { relativeTo: this.route });
  }
  clickItem(id: string) {
    this._router.navigate(['detail', id], { relativeTo: this.route });
}

clickItemEdit(id: string) {
    this._router.navigate(['edit', id], { relativeTo: this.route });
}

clickItemRemove(id: string) {
    this._celebrityService.delete(id);
}
}
