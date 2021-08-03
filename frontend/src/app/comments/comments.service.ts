import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IComment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  createComment(comment: IComment, bookId: string) {
    return this.http.post(`http://localhost:3000/api/comments/create/${bookId}`, { token: localStorage.getItem('token'), comment })
  }

  remove(id: string) {
    return this.http.delete(`http://localhost:3000/api/comments/${id}`, { body: { token: localStorage.getItem('token') } })
  }

  edit(comment: IComment, id: string) {
    return this.http.put(`http://localhost:3000/api/comments/${id}`, { token: localStorage.getItem('token'), comment })
  }
}