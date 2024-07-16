import { TestBed } from '@angular/core/testing';

import { FuelTopUpService } from './fuel-top-up.service';

describe('FuelTopUpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuelTopUpService = TestBed.get(FuelTopUpService);
    expect(service).toBeTruthy();
  });
});
