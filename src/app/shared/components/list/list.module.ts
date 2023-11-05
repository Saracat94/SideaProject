import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../../pipe/pipes.module';
import { ListComponent } from './list.component';
import { RatingBarModule } from '../rating_bar/ratingbar.module';
import { FooterModule } from '../footer/footer.model';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    RatingBarModule,
    FooterModule
  ],
  declarations: [ListComponent],
  exports: [ListComponent],
})
export class ListModule {}
