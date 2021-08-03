import { Component, OnInit } from '@angular/core';
import { AuthStore } from 'src/app/shared/auth-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isUser: string | null = ''
  constructor(private store: AuthStore) { }

  ngOnInit(): void {
    this.isUser=localStorage.getItem('token')
  }

}
