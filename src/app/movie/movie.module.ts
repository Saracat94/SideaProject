import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviePage } from './movie.page';

import { MoviePageRoutingModule } from './movie-routing.module';
import { MovieDetailComponent } from './components/detail/m.detail.component';

import { MovieEditComponent } from './components/edit/m.edit.component';
import { ListModule } from '../shared/components/list/list.module';
import { MovieCreateComponent } from './components/create/m.create.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MoviePageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ListModule
  ],
  declarations: [MoviePage, MovieDetailComponent, MovieEditComponent, MovieCreateComponent]
})
export class MoviePageModule {

}
