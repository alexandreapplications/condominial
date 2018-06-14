import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { UtilityModule } from '../utility/utility.module';
import { LandingRoutingModule } from './landing-routing.module';
import { CondominiumComponent } from './condominium/condominium.component';
import { MatCardModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { SubscribeComponent } from './parts/subscribe/subscribe.component';
import { LoginComponent } from './parts/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    LandingRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [IndexComponent, CondominiumComponent, SubscribeComponent, LoginComponent]
})
export class LandingModule { }
