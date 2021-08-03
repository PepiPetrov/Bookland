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
  getOne(id: string): Observable<IBook> {
    return this.http.get<IBook>(`http://localhost:3000/api/books/${id}`)
  }
  remove(id: string) {
    return this.http.delete('http://localhost:3000/api/books/remove/' + id, { body: { token: localStorage.getItem('token') } })
  }
  edit(id: string, book: IBook) {
    return this.http.put('http://localhost:3000/api/books/edit/' + id, { token: localStorage.getItem('token'), book })
  }

  getProfile(): Observable<IBook[]> {
    return this.http.get<IBook[]>('http://localhost:3000/api/books/profile?token=' + encodeURIComponent(String(localStorage.getItem('token'))))
  }

  getCreatedBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>('http://localhost:3000/api/books/created?token=' + encodeURIComponent(String(localStorage.getItem('token'))))
  }

  like(bookId: string) {
    return this.http.post('http://localhost:3000/api/books/like/' + bookId, { token: localStorage.getItem('token') })
  }
}
