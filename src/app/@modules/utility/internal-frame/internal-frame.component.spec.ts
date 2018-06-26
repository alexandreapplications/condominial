import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalFrameComponent } from './internal-frame.component';
import { MatToolbarModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonDataServiceService } from '../../../@services/common-data-service.service';
import { ConnectionInterceptor } from '../../../@core/connection-interceptor';
import { SecurityService } from '../../../@services/security.service';

describe('InternalFrameComponent', () => {
  let component: InternalFrameComponent;
  let fixture: ComponentFixture<InternalFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalFrameComponent ],
      imports: [ MatToolbarModule,
        HttpClientModule,
        BrowserAnimationsModule ],
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
    fixture = TestBed.createComponent(InternalFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
