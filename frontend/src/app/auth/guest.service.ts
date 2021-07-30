import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(private http: HttpClient) { }

  login(user: IUser) {
    return this.http.post('http://localhost:3000/api/auth/login', { user })
  }

  register(user: IUser): Observable<Response> {
    return this.http.post<Response>('http://localhost:3000/api/auth/register', { user })
  }
}