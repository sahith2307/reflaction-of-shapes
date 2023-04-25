import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SahpesComponent } from './sahpes/sahpes.component';
import { RefractionComponent } from './refraction/refraction.component';

@NgModule({
  declarations: [AppComponent, SahpesComponent, RefractionComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
