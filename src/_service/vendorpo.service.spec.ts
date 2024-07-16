import { TestBed } from '@angular/core/testing';

import { VendorpoService } from './vendorpo.service';

describe('VendorpoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendorpoService = TestBed.get(VendorpoService);
    expect(service).toBeTruthy();
  });
});
