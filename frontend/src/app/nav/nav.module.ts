import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AssetsModule } from '../assets/assets.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './nav/nav.component';
import { GuestNavComponent } from './guest-nav/guest-nav.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { AuthStore } from '../shared/auth-store.service';


@NgModule({
  declarations: [NavComponent, GuestNavComponent, UserNavComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    AssetsModule,
    MatButtonModule,
    MatButtonModule
  ],
  exports: [
    NavComponent
  ],
  providers: [AuthStore]
})
export class NavModule { }
