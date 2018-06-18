import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominiumComponent } from './condominium.component';
import { ExternalFrameComponent } from '../../utility/external-frame/external-frame.component';
import { UtilityModule } from '../../utility/utility.module';

describe('CondominiumComponent', () => {
  let component: CondominiumComponent;
  let fixture: ComponentFixture<CondominiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondominiumComponent ],
      imports: [ UtilityModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondominiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
