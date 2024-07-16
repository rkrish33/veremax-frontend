import { TestBed } from '@angular/core/testing';

import { UserMasterService } from './user-master.service';

describe('UserMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserMasterService = TestBed.get(UserMasterService);
    expect(service).toBeTruthy();
  });
});
