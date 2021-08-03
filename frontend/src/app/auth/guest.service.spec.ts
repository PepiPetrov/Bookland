import { TestBed } from '@angular/core/testing';

import { GuestService } from '../auth/guest.service';

describe('GuestService', () => {
  let service: GuestService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestService);
  });

 
});
