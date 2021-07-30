import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { GuestService } from './guest.service';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GuestService],
  exports: [
    LoginComponent, RegisterComponent
  ]
})
export class AuthModule { }
