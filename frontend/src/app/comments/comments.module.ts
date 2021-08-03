import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all/all.component';
import { CommentComponent } from './comment/comment.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component';
import { CommentsService } from './comments.service';
import { BooksService } from '../books/books.service';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AllComponent,
    CommentComponent,
    EditCommentComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [CommentsService, BooksService],
  exports: [
    AllComponent
  ]
})
export class CommentsModule { }
