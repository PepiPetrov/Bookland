import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/interfaces/book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  book: IBook = { title: '', author: '', description: '', rating: '', year: 0, linkToBuy: '', img: '',creator:'',comments:[],_id:'' }

  constructor(private service: BooksService) {
  }

  ngOnInit(): void {
  }

  isUrl(img: string) {
    return /https?:\/\//.test(img)
  }

  onSubmit() {
    this.service.create(this.book).subscribe(x=>{
      
    })
  }

}