import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/interfaces/book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  public books!: IBook[]
  constructor(private service: BooksService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(x => {
      this.books = x
    })


  }

}
