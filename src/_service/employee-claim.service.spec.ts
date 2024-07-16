import { TestBed } from '@angular/core/testing';

import { EmployeeClaimService } from './employee-claim.service';

describe('EmployeeClaimService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeClaimService = TestBed.get(EmployeeClaimService);
    expect(service).toBeTruthy();
  });
});
