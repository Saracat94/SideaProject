import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CelebrityPage } from './celebrity.page';
import { CelebrityPageRoutingModule } from './celebrity-routing.module';
import { ListModule } from '../shared/components/list/list.module';
import { CelebrityDetailComponent } from './components/detail/c.detail.component';
import { CelebrityEditComponent } from './components/edit/c.edit.component.';
import { CelebrityCreateComponent } from './components/create/c.create.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CelebrityPageRoutingModule,
    ListModule,
    ReactiveFormsModule
  ],
  declarations: [CelebrityPage, CelebrityDetailComponent, CelebrityEditComponent, CelebrityCreateComponent]
})
export class CelebrityPageModule { }
