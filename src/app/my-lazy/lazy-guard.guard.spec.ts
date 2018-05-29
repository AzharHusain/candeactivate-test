import { TestBed, async, inject } from '@angular/core/testing';

import { LazyGuardGuard } from './lazy-guard.guard';

describe('LazyGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LazyGuardGuard]
    });
  });

  it('should ...', inject([LazyGuardGuard], (guard: LazyGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
