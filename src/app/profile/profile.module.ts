import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';


import { ProfilePageRoutingModule } from './profile-routing.module';
import { ProfileDettaglioPage } from './components/dettaglio/p.detail';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,

    ProfilePageRoutingModule
  ],
  declarations: [ProfilePage, ProfileDettaglioPage]
})
export class ProfilePageModule {}
