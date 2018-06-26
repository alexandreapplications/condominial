import {UtilityModule} from '../../utility/utility.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import { MatCardModule, MatSnackBarModule, MatAutocompleteModule, MatButtonModule,
   MatFormFieldModule, MatToolbarModule, MatDialogModule } from '@angular/material';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonDataServiceService } from '../../../@services/common-data-service.service';
import { SecurityService } from '../../../@services/security.service';
import { ConnectionInterceptor } from '../../../@core/connection-interceptor';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../parts/login/login.component';
import { ExternalFrameComponent } from '../../utility/external-frame/external-frame.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexComponent,
        LoginComponent,
        ExternalFrameComponent ],
      imports: [ CommonModule,
        MatCardModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        MatToolbarModule,
        HttpClientModule,
        MatFormFieldModule,
        MatDialogModule,
        HttpClientModule ],
        providers: [CommonDataServiceService,
          {
            provide: HTTP_INTERCEPTORS,
            useClass: ConnectionInterceptor,
            multi: true
          },
          SecurityService]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
