import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/interfaces/book';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {

  books!: IBook[]
  search: string = ''
  constructor(private service: SearchService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.service.searchByYear(Number(this.search)).subscribe(x => {
      this.books = x
      this.sort()
    })
  }

  sort() {
    this.books = this.books.sort((a, b) => a.title.localeCompare(b.title))
  }

}
