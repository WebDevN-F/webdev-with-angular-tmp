import { TestBed } from '@angular/core/testing';

import { BreadcrumbInitializedGuardGuard } from './breadcrumb-initialized-guard.guard';

describe('BreadcrumbInitializedGuardGuard', () => {
  let guard: BreadcrumbInitializedGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BreadcrumbInitializedGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
