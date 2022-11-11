import { TestBed } from '@angular/core/testing';

import { AdrpersService } from './adrpers.service';

describe('AdrpersService', () => {
  let service: AdrpersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdrpersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
