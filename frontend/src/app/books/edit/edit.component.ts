import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from 'src/app/interfaces/book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public book!: IBook
  constructor(private service: BooksService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.service.getOne(this.route.snapshot.params['id']).subscribe(x => {
      this.book = x
    })
  }

  isUrl(img: string) {
    return /https?:\/\//.test(img)
  }

  async onSubmit() {
    try {
      await this.service.edit(this.route.snapshot.params['id'], this.book).toPromise()
      this.router.navigate(['/books/details/', this.route.snapshot.params['id']])
    } catch (e) {
      console.log(e);
    }
  }
}
