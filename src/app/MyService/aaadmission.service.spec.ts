import { TestBed } from '@angular/core/testing';

import { AaadmissionService } from './aaadmission.service';

describe('AaadmissionService', () => {
  let service: AaadmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AaadmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
