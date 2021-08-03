import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/interfaces/book';
import { BooksService } from '../../books.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  books!: IBook[]
  search: string = ''
  constructor(private service: SearchService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.service.searchByName(this.search.toLocaleLowerCase()).subscribe(x => {
      this.books = x
    })
    
  }

}
