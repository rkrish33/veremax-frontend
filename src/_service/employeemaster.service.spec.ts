 import { TestBed } from '@angular/core/testing';

import { EmployeemasterService } from './employeemaster.service';

describe('EmployeemasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeemasterService = TestBed.get(EmployeemasterService);
    expect(service).toBeTruthy();
  });
});
