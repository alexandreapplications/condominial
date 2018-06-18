import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalFrameComponent } from './external-frame/external-frame.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UtilityRoutingModule } from './utility-routing.module';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material';
import { CenterContentComponent } from './center-content/center-content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubscribeDialogComponent } from './dialog/subscribe-dialog/subscribe-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    UtilityRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [
    ExternalFrameComponent, CenterContentComponent,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  entryComponents: [SubscribeDialogComponent],
  declarations: [ExternalFrameComponent, NotFoundComponent, CenterContentComponent, SubscribeDialogComponent]
})
export class UtilityModule { }
