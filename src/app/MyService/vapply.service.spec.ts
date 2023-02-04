import { TestBed } from '@angular/core/testing';

import { VapplyService } from './vapply.service';

describe('VapplyService', () => {
  let service: VapplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VapplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
