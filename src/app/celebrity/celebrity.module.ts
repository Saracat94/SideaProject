import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CelebrityPage } from './celebrity.page';
import { CelebrityPageRoutingModule } from './celebrity-routing.module';
import { ListComponent } from '../shared/components/list/list.component';
import { ListModule } from '../shared/components/list/list.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CelebrityPageRoutingModule,
    ListModule
  ],
  declarations: [CelebrityPage]
})
export class CelebrityPageModule {}
