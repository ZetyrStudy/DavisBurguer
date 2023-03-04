import { HeaderComponent } from 'src/app/components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    IonicModule
  ],
  exports:[ HeaderComponent ]
})
export class SharedModule { }
