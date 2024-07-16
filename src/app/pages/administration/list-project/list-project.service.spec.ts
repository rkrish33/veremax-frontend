import { TestBed } from '@angular/core/testing';

import { ListProjectService } from './list-project.service';

describe('ListProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListProjectService = TestBed.get(ListProjectService);
    expect(service).toBeTruthy();
  });
});
