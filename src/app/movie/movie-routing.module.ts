import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePage } from './movie.page';
import { MovieListComponent } from './components/list/list.component';
import { MovieDetailComponent } from './components/detail/detail.component';
import { Movie } from './interfaces/movie.interfaces';

const routes: Routes = [
  {
    path: '',
    component: MoviePage,
  },
  {
    path: 'detail/:id',
    component: MovieDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviePageRoutingModule { }
