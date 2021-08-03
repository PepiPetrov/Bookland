import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { AuthStore } from './auth-store.service';

describe('AuthStoreService', () => {
  let service: AuthStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });
    service = TestBed.inject(AuthStore);
  });

  it('Token must be empty', () => {
    const valueServiceSpy =
      jasmine.createSpyObj('AuthStore', ['token$']);
    valueServiceSpy.token$.and.returnValue(of(''))
    let value: string = ''
    service.token$.subscribe(x => {
      value = String(x)
    })
    expect(value).toBe('')
  })
});
