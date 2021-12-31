import { TestBed } from '@angular/core/testing';

import { WebdevThirdPartyService } from './webdev-third-party.service';

describe('WebdevThirdPartyService', () => {
  let service: WebdevThirdPartyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebdevThirdPartyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
