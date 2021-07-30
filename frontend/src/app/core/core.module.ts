import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AuthStore } from '../shared/auth-store.service';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [AuthStore]
})
export class CoreModule { }
