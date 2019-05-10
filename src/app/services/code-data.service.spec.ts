import { TestBed } from '@angular/core/testing';

import { CodeDataService } from './code-data.service';

describe('CodeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodeDataService = TestBed.get(CodeDataService);
    expect(service).toBeTruthy();
  });
});
