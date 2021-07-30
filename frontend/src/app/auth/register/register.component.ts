import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISuccess } from 'src/app/interfaces/success';
import { AuthStore } from 'src/app/shared/auth-store.service';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  user = { username: '', password: '', rePass: '', email: '' }
  err: string = ''

  constructor(private service: GuestService, private store: AuthStore, private router: Router) {
  }

  ngOnInit(): void {
  }

  async onClick() {
    try {
      await this.service.register(this.user).toPromise()
      const res = await this.service.login(this.user).toPromise()
      const data = res as unknown as ISuccess
      this.store.login(data.token)
      localStorage.setItem('token', data.token)
      this.router.navigate(['/home'])
      window.location.reload()
    } catch (e) {
      console.log(e.message);
      this.err = 'Username must be unique!'
      setTimeout(() => {
        this.err = ''
      }, 10000)
    }
  }

}
