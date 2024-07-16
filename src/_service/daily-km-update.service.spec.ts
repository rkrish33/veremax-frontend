import { TestBed } from '@angular/core/testing';

import { DailyKmUpdateService } from './daily-km-update.service';

describe('DailyKmUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DailyKmUpdateService = TestBed.get(DailyKmUpdateService);
    expect(service).toBeTruthy();
  });
});
