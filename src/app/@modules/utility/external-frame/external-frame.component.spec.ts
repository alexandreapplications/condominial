import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalFrameComponent } from './external-frame.component';
import { MatToolbarModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonDataServiceService } from '../../../@services/common-data-service.service';
import { ConnectionInterceptor } from '../../../@core/connection-interceptor';
import { SecurityService } from '../../../@services/security.service';

describe('ExternalFrameComponent', () => {
  let component: ExternalFrameComponent;
  let fixture: ComponentFixture<ExternalFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExternalFrameComponent],
      imports: [MatToolbarModule,
        HttpClientModule,
        BrowserAnimationsModule],
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
    fixture = TestBed.createComponent(ExternalFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
