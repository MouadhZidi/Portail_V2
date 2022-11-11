import { TestBed } from '@angular/core/testing';

import { RENSEIGNEMENTPERSService } from './renseignement-pers.service';

describe('RENSEIGNEMENTPERSService', () => {
  let service: RENSEIGNEMENTPERSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RENSEIGNEMENTPERSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
