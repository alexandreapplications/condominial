import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { UtilityModule } from '../../../utility/utility.module';
import { MatCardModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { IndexComponent } from '../../index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent, IndexComponent ],
      imports: [ UtilityModule,
        MatCardModule,
        MatButtonModule,
        MatSnackBarModule,
        HttpClientModule,
        BrowserAnimationsModule,
        BrowserModule,
        RouterTestingModule.withRoutes([{
          path: '', component: IndexComponent }
        ])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
