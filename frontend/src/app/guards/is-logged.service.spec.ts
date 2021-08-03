import { TestBed } from '@angular/core/testing';

import { IsLoggedService } from './is-logged.service';

describe('IsLoggedService', () => {
  let service: IsLoggedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsLoggedService);
  });
});
