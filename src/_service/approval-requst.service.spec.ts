import { TestBed } from '@angular/core/testing';

import { ApprovalRequstService } from './approval-requst.service';

describe('ApprovalRequstService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApprovalRequstService = TestBed.get(ApprovalRequstService);
    expect(service).toBeTruthy();
  });
});
