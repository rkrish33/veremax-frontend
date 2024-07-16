import { TestBed } from '@angular/core/testing';

import { JwtRequestService } from './jwt-request.service';

describe('JwtRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtRequestService = TestBed.get(JwtRequestService);
    expect(service).toBeTruthy();
  });
});
