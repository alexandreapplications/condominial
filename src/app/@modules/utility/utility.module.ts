import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalFrameComponent } from './external-frame/external-frame.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UtilityRoutingModule } from './utility-routing.module';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatDialogModule,
  MatButtonModule, MatAutocompleteModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { SubscribeDialogComponent } from './dialog/subscribe-dialog/subscribe-dialog.component';
import { InternalFrameComponent } from './internal-frame/internal-frame.component';

@NgModule({
  imports: [
    CommonModule,
    UtilityRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatAutocompleteModule
  ],
  exports: [
    InternalFrameComponent,
    ExternalFrameComponent,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [SubscribeDialogComponent],
  declarations: [ExternalFrameComponent, NotFoundComponent, SubscribeDialogComponent, InternalFrameComponent]
})
export class UtilityModule { }
