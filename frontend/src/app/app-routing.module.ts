import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { IsGuest } from './guards/isGuest';
import { AllBooksComponent } from './books/all-books/all-books.component';
import { CreateComponent } from './books/create/create.component';
import { IsAuth } from './guards/isAuth';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'auth/register', component: RegisterComponent, canActivate: [IsGuest] },
  { path: 'auth/login', component: LoginComponent },
  { path: 'books/all', component: AllBooksComponent },
  { path: 'books/create', component: CreateComponent, canActivate: [IsAuth] },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
  providers: [IsGuest, IsAuth]
})
export class AppRoutingModule { }
