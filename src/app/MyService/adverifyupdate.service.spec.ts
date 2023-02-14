import { TestBed } from '@angular/core/testing';

import { AdverifyupdateService } from './adverifyupdate.service';

describe('AdverifyupdateService', () => {
  let service: AdverifyupdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdverifyupdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
