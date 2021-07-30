import { Component, OnInit } from '@angular/core';
import { AuthStore } from 'src/app/shared/auth-store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLogged: string | null = '';

  constructor(private store: AuthStore) { }

  ngOnInit(): void {
    this.isLogged = localStorage.getItem('token')

  }

}
