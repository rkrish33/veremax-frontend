import { TestBed } from '@angular/core/testing';

import { CustomerpoService } from './customerpo.service';

describe('CustomerpoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerpoService = TestBed.get(CustomerpoService);
    expect(service).toBeTruthy();
  });
});
