import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/interfaces/comment';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {
  @Input() comment: IComment = { content: '', author: '', _id: '' }
  constructor(private service: CommentsService) { }

  ngOnInit(): void {
  }

  edit() {
    this.service.edit(this.comment, this.comment._id).subscribe(x => { })
    window.location.reload()
  }

}
