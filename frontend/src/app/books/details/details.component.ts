import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from 'src/app/interfaces/book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public id: string = ''
  public book!: IBook
  public userId: string = String(localStorage.getItem('userId'))

  constructor(private route: ActivatedRoute, private service: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    
    this.service.getOne(this.id).subscribe(x => {
      this.book = x
    })

  }

  onRemove() {
    const res = confirm('Are you sure you want to remove this book?')
    if (res) {
      this.service.remove(this.id).subscribe()
      this.router.navigate(['/home'])
    }
  }

  like() {
    this.service.like(this.id).subscribe(x => { })
    window.location.reload()

  }

}
