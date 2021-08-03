import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISuccess } from 'src/app/interfaces/success';
import { AuthStore } from 'src/app/shared/auth-store.service';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = { username: '', password: '', email: '' }
  err: string = ''

  constructor(private service: GuestService, private store: AuthStore, private router: Router) {
  }

  ngOnInit(): void {
  }

  async onClick() {
    try {
      const res = await this.service.login(this.user).toPromise()
      const data = res as unknown as ISuccess
      this.store.login(data.token)
      localStorage.setItem('token', data.token)
      localStorage.setItem('userId', data.userId)
      window.location.href = 'http://localhost:4200/home'
    } catch (e) {
      this.err = 'User not found!'
      setTimeout(() => {
        this.err = ''
      }, 10000)
    }
  }

}
