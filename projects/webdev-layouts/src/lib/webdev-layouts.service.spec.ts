import { TestBed } from '@angular/core/testing';

import { WebdevLayoutsService } from './webdev-layouts.service';

describe('WebdevLayoutsService', () => {
  let service: WebdevLayoutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebdevLayoutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
