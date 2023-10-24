import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Location } from '@angular/common';
import { Celebrity } from "src/app/shared/interfaces/celebrity.interfaces";
import { CelebrityService } from "src/app/tabs/services/celebrity.service";

@Component({
    selector: 'app-ccreate',
    templateUrl: 'c.create.component.html',
    styleUrls: ['c.create.component.scss']
})
export class CelebrityCreateComponent {
    formUser: FormGroup | undefined;
    celebrity: Celebrity[] =[];

    constructor(private _celebrityService: CelebrityService,
        private _location: Location) {
            this._createForm();
    }

    private _createForm() {
        this.formUser = new FormGroup({
            id: new FormControl("tt0076759", Validators.required),
            name: new FormControl("", Validators.required),
            birthYear: new FormControl(0, Validators.required),
            deathYear: new FormControl(0, Validators.required)
        });
        
    }

    submitForm() {
        console.log(this.formUser)
        if (this.formUser?.valid) {
            this._celebrityService.create(this.formUser?.value);
            this._location.back();
        }
    }
}