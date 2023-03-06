import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParallaxDirective } from 'src/app/directives/parallax.directive';
import { HideHeaderDirective } from 'src/app/directives/hide-header.directive';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
