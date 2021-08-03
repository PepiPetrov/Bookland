import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books/books.service';
import { IBook } from 'src/app/interfaces/book';
import { IComment } from 'src/app/interfaces/comment';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  @Input() bookId: string = ''
  comments: IComment[] = []
  comment: IComment = { content: '', author: '', _id: '' }
  userId: string = String(localStorage.getItem('userId'))
  constructor(private service: CommentsService, private booksService: BooksService) {
  }

  ngOnInit(): void {
    this.booksService.getOne(this.bookId).subscribe(x => {
      this.comments = x.comments
    })

  }

  onSubmit() {
    console.log(this.bookId);
    this.service.createComment(this.comment, this.bookId).subscribe(x => { })
    window.location.reload()
  }

}
