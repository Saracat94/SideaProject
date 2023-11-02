import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../../pipe/pipes.module';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
  ],
  declarations: [ListComponent],
  exports: [ListComponent],
})
export class ListModule {}
