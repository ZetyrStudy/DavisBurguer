import { HeaderComponent } from 'src/app/components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { IonicModule } from '@ionic/angular';
import { ParallaxDirective } from 'src/app/directives/parallax.directive';
import { HideHeaderDirective } from 'src/app/directives/hide-header.directive';



@NgModule({
  declarations: [HeaderComponent, ParallaxDirective, HideHeaderDirective],
  imports: [
    CommonModule,
    SharedRoutingModule,
    IonicModule
  ],
  exports:[HeaderComponent, ParallaxDirective, HideHeaderDirective]
})
export class SharedModule { }
