import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBook } from 'src/app/interfaces/book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  book: IBook = { liked: [], title: '', author: '', description: '', rating: 0, year: 0, linkToBuy: '', img: '', creator: '', comments: [], _id: '' }
  isError: boolean = false

  constructor(private service: BooksService, private router: Router) {
  }

  ngOnInit(): void {
  }

  isUrl(img: string) {
    return /https?:\/\//.test(img)
  }

  async onSubmit() {
    try {
      await this.service.create(this.book).toPromise()
      this.router.navigate(['/home'])
    } catch (e) {
      this.isError = true
      console.log(e);
    }
  }

}