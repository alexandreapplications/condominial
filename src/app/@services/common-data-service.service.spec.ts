import { TestBed, inject } from '@angular/core/testing';

import { CommonDataServiceService } from './common-data-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('CommonDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonDataServiceService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([CommonDataServiceService], (service: CommonDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
