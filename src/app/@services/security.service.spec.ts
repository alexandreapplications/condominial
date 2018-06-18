import { TestBed, inject } from '@angular/core/testing';

import { SecurityService } from './security.service';
import { HttpClientModule } from '@angular/common/http';

describe('SecurityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecurityService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([SecurityService], (service: SecurityService) => {
    expect(service).toBeTruthy();
  }));
});
