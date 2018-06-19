import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalFrameComponent } from './external-frame/external-frame.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UtilityRoutingModule } from './utility-routing.module';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatDialogModule, 
  MatButtonModule, MatAutocompleteModule } from '@angular/material';
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
    MatButtonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatAutocompleteModule
  ],
  exports: [
    ExternalFrameComponent, CenterContentComponent,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [SubscribeDialogComponent],
  declarations: [ExternalFrameComponent, NotFoundComponent, CenterContentComponent, SubscribeDialogComponent]
})
export class UtilityModule { }
