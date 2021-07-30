import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store'
import { Observable } from 'rxjs';
import { ILogged } from '../interfaces/isLogged';


@Injectable({
  providedIn: 'root'
})
export class AuthStore extends ComponentStore<ILogged> {

  constructor() {
    super({ token: '' })
  }

  readonly token$: Observable<string | undefined> = this.select(state => state.token);

  readonly login = this.updater((state, token: string) => {
    state.token = token
    return state
  });

  readonly logout = this.updater((state) => ({
    token: ''
  }));
}
