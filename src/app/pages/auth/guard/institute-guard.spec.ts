import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { instituteGuard } from './institute-guard';

describe('instituteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => instituteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
