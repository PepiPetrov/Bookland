import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/interfaces/book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  public books: IBook[] = []
  isUser: string | null = localStorage.getItem('token')
  constructor(private service: BooksService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(x => {
      this.books = x
    })
  }

  sort() {
    this.books = this.books.sort((a, b) => a.title.localeCompare(b.title))
  }

}
