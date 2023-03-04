import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SectionProdsPipe } from './section-prods.pipe';
import { HeaderModule } from './components/header/header.module';

@NgModule({
  declarations: [AppComponent, SectionProdsPipe],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HeaderModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
