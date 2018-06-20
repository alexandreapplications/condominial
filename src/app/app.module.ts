import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import localePt from '@angular/common/locales/pt';
import localePtExtra from '@angular/common/locales/extra/pt';
import { registerLocaleData } from '@angular/common';
import { CommonDataServiceService } from './@services/common-data-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConnectionInterceptor } from './@core/connection-interceptor';
import { SecurityService } from './@services/security.service';
import { DashboardComponent } from './@modules/user/dashboard/dashboard.component';
registerLocaleData(localePt, 'pt', localePtExtra);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ConnectionInterceptor,
      multi: true
    },
    CommonDataServiceService,
    SecurityService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
