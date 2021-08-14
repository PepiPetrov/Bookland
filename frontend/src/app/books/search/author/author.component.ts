import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/interfaces/book';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  books!: IBook[]
  search: string = ''
  constructor(private service: SearchService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.service.searchByAuthor(this.search.toLocaleLowerCase()).subscribe(x => {
      this.books = x
      this.sort()
    })
  }

  sort() {
    this.books = this.books.sort((a, b) => a.title.localeCompare(b.title))
  }
}
