import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePage } from './movie.page';
import { MovieDetailComponent } from './components/detail/m.detail.component';
import { MovieEditComponent } from './components/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: MoviePage,
  },
  {
    path: 'detail/:id',
    component: MovieDetailComponent,
  },
  {
    path: 'edit/:id',
    component: MovieEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviePageRoutingModule { }
