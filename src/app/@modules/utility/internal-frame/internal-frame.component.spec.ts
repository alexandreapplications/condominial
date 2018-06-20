import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalFrameComponent } from './internal-frame.component';

describe('InternalFrameComponent', () => {
  let component: InternalFrameComponent;
  let fixture: ComponentFixture<InternalFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalFrameComponent ]
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
