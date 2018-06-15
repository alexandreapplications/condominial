import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import localePt from '@angular/common/locales/pt';
import localePtExtra from '@angular/common/locales/extra/pt';
import { registerLocaleData } from '@angular/common';
import { CommonDataServiceService } from './@services/common-data-service.service';
import { HttpClient } from '@angular/common/http';
registerLocaleData(localePt, 'pt', localePtExtra);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClient
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    CommonDataServiceService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
