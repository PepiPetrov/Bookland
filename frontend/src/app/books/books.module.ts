import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './all-books/all-books.component';
import { FormsModule } from '@angular/forms';
import { BooksService } from './books.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { SearchModule } from './search/search.module';
import { ProfileComponent } from './profile/profile.component';
import { CommentsModule } from '../comments/comments.module';

@NgModule({
  declarations: [
    AllBooksComponent,
    CreateComponent,
    DetailsComponent,
    EditComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    SearchModule,
    CommentsModule
  ],
  providers: [BooksService]
})

export class BooksModule { }
