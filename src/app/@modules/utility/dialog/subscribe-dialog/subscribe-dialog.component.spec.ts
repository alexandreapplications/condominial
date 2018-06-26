import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeDialogComponent } from './subscribe-dialog.component';
import { SecurityService } from '../../../../@services/security.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ConnectionInterceptor } from '../../../../@core/connection-interceptor';
import { CommonDataServiceService } from '../../../../@services/common-data-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSnackBarModule, MatButtonModule, MatFormFieldModule, MatAutocompleteModule, MatDialogModule,
  MatInputModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

describe('SubscribeDialogComponent', () => {
  let component: SubscribeDialogComponent;
  let fixture: ComponentFixture<SubscribeDialogComponent>;
  const dialogRef = MAT_DIALOG_DATA;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribeDialogComponent],
      imports: [
        MatFormFieldModule,
        MatButtonModule,
        MatSnackBarModule,
        MatAutocompleteModule,
        MatInputModule,
        MatDialogModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule],
      providers: [CommonDataServiceService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ConnectionInterceptor,
          multi: true
        },
        SecurityService,
        dialogRef]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
