import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviePage } from './movie.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MoviePageRoutingModule } from './movie-routing.module';
import { MovieListComponent } from './components/list/list.component';
import { MovieDetailComponent } from './components/detail/detail.component';
import { RouterModule } from '@angular/router';
import { MovieEditComponent } from './components/edit/edit.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MoviePageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MoviePage, MovieListComponent, MovieDetailComponent, MovieEditComponent]
})
export class MoviePageModule {

}
