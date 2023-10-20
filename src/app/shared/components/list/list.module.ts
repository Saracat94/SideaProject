import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ListComponent],
  exports: [ListComponent]
})
export class ListModule {

}