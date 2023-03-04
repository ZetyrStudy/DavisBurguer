import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionProdsPage } from './section-prods.page';

const routes: Routes = [
  {
    path: '',
    component: SectionProdsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionProdsPageRoutingModule {}
