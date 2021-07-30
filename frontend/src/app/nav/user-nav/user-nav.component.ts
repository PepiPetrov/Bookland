import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStore } from 'src/app/shared/auth-store.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {

  constructor(private store: AuthStore, private router: Router) { }

  ngOnInit(): void {
  }

  logoutClick() {
    this.store.logout()
    localStorage.removeItem('token')
    this.router.navigate(['/auth/login'])
    window.location.reload()
  }

}
