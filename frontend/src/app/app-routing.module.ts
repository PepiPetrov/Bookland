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
import { DetailsComponent } from './books/details/details.component';
import { EditComponent } from './books/edit/edit.component';
import { MainComponent } from './books/search/main/main.component';
import { ProfileComponent } from './books/profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'auth/register', component: RegisterComponent, canActivate: [IsGuest] },
  { path: 'auth/login', component: LoginComponent },
  { path: 'books/all', component: AllBooksComponent },
  { path: 'books/create', component: CreateComponent, canActivate: [IsAuth] },
  { path: 'books/details/:id', component: DetailsComponent },
  { path: 'books/edit/:id', component: EditComponent, canActivate: [IsAuth] },
  { path: 'books/search', component: MainComponent },
  { path: 'books/profile', component: ProfileComponent, canActivate: [IsAuth] },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
  providers: [IsGuest, IsAuth]
})
export class AppRoutingModule { }
