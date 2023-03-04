import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoProtudosPage } from './info-protudos.page';

const routes: Routes = [
  {
    path: '',
    component: InfoProtudosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoProtudosPageRoutingModule {}
