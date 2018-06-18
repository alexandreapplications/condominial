import {UtilityModule} from '../../utility/utility.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import { SubscribeComponent } from '../parts/subscribe/subscribe.component';
import { MatCardModule, MatSnackBarModule, MatAutocompleteModule, MatButtonModule } from '@angular/material';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonDataServiceService } from '../../../@services/common-data-service.service';
import { SecurityService } from '../../../@services/security.service';
import { ConnectionInterceptor } from '../../../@core/connection-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexComponent, SubscribeComponent ],
      imports: [ UtilityModule,
        MatCardModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatSnackBarModule,
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
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
