import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LinksComponent } from './links.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LinksComponent],
  exports: [LinksComponent]
})
export class LinksModule {

}