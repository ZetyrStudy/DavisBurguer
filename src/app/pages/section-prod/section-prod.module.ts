import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SectionProdPageRoutingModule } from './section-prod-routing.module';

import { SectionProdPage } from './section-prod.page';
import { SharedModule } from "../../components/shared/shared.module";

@NgModule({
    declarations: [SectionProdPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SectionProdPageRoutingModule,
        SharedModule
    ]
})
export class SectionProdPageModule {}
