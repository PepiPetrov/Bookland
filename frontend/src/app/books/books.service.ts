import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IBook[]> {
    return this.http.get<IBook[]>('http://localhost:3000/api/books/all')
  }
  create(book: IBook): Observable<Object> {
    return this.http.post('http://localhost:3000/api/books/create', { book, token: localStorage.getItem('token') })
  }
}
