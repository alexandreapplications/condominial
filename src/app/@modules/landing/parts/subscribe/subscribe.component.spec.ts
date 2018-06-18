import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeComponent } from './subscribe.component';
import { UtilityModule } from '../../../utility/utility.module';
import { MatCardModule, MatButtonModule, MatAutocompleteModule, MatSnackBarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SubscribeComponent', () => {
  let component: SubscribeComponent;
  let fixture: ComponentFixture<SubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeComponent ],
      imports: [ UtilityModule,
        MatCardModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatSnackBarModule,
        HttpClientModule,
        BrowserAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
