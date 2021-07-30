import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './all-books/all-books.component';
import { FormsModule } from '@angular/forms';
import { BooksService } from './books.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    AllBooksComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    AllBooksComponent,
    CreateComponent
  ],
  providers: [BooksService]
})

export class BooksModule { }
