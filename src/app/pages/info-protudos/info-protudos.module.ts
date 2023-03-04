import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoProtudosPageRoutingModule } from './info-protudos-routing.module';

import { InfoProtudosPage } from './info-protudos.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoProtudosPageRoutingModule,
    SharedModule
  ],
  declarations: [InfoProtudosPage]
})
export class InfoProtudosPageModule {}
