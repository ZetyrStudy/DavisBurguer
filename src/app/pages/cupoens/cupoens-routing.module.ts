import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CupoensPage } from './cupoens.page';

const routes: Routes = [
  {
    path: '',
    component: CupoensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CupoensPageRoutingModule {}
