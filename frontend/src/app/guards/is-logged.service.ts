import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedService {

  constructor(private http: HttpClient) { }

  isLogged() {
    return this.http.get<{} | IUser>('http://localhost:3000/api/auth/isLogged')
  }
}
