import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/interfaces/book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  books!: IBook[]
  created!: IBook[]
  constructor(private service: BooksService) { }

  ngOnInit(): void {
    this.service.getProfile().subscribe(x => {
      this.books = x
    })
    this.service.getCreatedBooks().subscribe(x => {
      this.created = x
    })

  }

}
