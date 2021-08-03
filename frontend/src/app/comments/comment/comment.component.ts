import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/interfaces/comment';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input('comment') comment: IComment = { content: '', author: '', _id: '' }
  userId: string = String(localStorage.getItem('userId'))
  isShow: boolean = false
  constructor(private service: CommentsService) { }

  ngOnInit(): void {
  }
  toggle() {
    this.isShow = true
  }

  hide() {
    this.isShow = false
  }
  remove() {
    this.service.remove(this.comment._id).subscribe(x => { })
    window.location.reload()
  }

}