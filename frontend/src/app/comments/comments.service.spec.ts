import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { IComment } from '../interfaces/comment';

import { CommentsService } from './comments.service';

describe('CommentsService', () => {
  let service: CommentsService;
  let comments: IComment[]

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentsService);
    comments = []
  });
});
