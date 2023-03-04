import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CupoensPageRoutingModule } from './cupoens-routing.module';

import { CupoensPage } from './cupoens.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CupoensPageRoutingModule,
    SharedModule
  ],
  declarations: [CupoensPage]
})
export class CupoensPageModule {}
