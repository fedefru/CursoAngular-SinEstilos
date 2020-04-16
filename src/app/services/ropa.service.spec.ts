import { TestBed } from '@angular/core/testing';

import { RopaService } from './ropa.service';

describe('RopaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RopaService = TestBed.get(RopaService);
    expect(service).toBeTruthy();
  });
});
