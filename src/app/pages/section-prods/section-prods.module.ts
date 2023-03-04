import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SectionProdsPageRoutingModule } from './section-prods-routing.module';

import { SectionProdsPage } from './section-prods.page';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SectionProdsPageRoutingModule
  ],
  declarations: [SectionProdsPage]
})
export class SectionProdsPageModule {}
