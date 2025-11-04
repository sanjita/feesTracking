import { TestBed } from '@angular/core/testing';

import { PackageMasterService } from './package-master-service';

describe('PackageMasterService', () => {
  let service: PackageMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
