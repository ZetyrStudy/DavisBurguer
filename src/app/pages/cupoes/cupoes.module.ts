import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CupoesPageRoutingModule } from './cupoes-routing.module';

import { CupoesPage } from './cupoes.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CupoesPageRoutingModule,
    SharedModule
  ],
  declarations: [CupoesPage]
})
export class CupoesPageModule {}
