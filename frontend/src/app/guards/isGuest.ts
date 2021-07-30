import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class IsGuest implements CanActivate {
    constructor(private router: Router) { }
    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (localStorage.getItem('token') !== null) {
            this.router.navigate(['/home'])
            return false
        }
        return localStorage.getItem('token') == null
    }
}