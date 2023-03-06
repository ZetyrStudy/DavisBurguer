import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionProdPage } from './section-prod.page';

const routes: Routes = [
  {
    path: '',
    component: SectionProdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionProdPageRoutingModule {}
