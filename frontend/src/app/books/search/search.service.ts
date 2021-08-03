import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from 'src/app/interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  searchByName(keyword: string): Observable<IBook[]> {
    return this.http.post<IBook[]>('http://localhost:3000/api/books/search/name', { name: keyword })
  }

  searchByAuthor(keyword: string): Observable<IBook[]> {
    return this.http.post<IBook[]>('http://localhost:3000/api/books/search/author', { author: keyword })
  }

  searchByYear(keyword: number): Observable<IBook[]> {
    return this.http.post<IBook[]>('http://localhost:3000/api/books/search/year', { year: keyword })
  }
}
