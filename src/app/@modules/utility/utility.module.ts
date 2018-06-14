import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalFrameComponent } from './external-frame/external-frame.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UtilityRoutingModule } from './utility-routing.module';
import { MatToolbarModule } from '@angular/material';
import { CenterContentComponent } from './center-content/center-content.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UtilityRoutingModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  exports: [
    ExternalFrameComponent, CenterContentComponent,
    ReactiveFormsModule
  ],
  declarations: [ExternalFrameComponent, NotFoundComponent, CenterContentComponent]
})
export class UtilityModule { }
