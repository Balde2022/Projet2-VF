import { TestBed } from '@angular/core/testing';

import { OlympicServiceService } from './olympic-service.service';

describe('OlympicServiceService', () => {
  let service: OlympicServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OlympicServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
