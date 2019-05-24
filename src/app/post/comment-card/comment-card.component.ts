import { Component, Input } from '@angular/core';
import { Comment } from '../comment.model';
import { CodeDataService } from 'src/app/services/code-data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent {
  @Input() comment: Comment;

  constructor(
    private _codeDataService: CodeDataService,
    private _authService: AuthenticationService,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {}

  get isLiking(): Observable<boolean> {
    return of(this.comment.isLiking);
  }

  get likes(): Observable<number> {
    return of(this.comment.likes);
  }

  like() {
    if (! this._authService.token) {
      this._snackBar
        .open(
          `You need to be registered to perform actions like 'like', 'commment', and 'post' content.`, '',
          {
            duration: 8000
          }
        );
    } else {
      this._codeDataService.likeComment(this.comment.postId, this.comment.id).subscribe(
        val => {
          if (!val) {
            this._snackBar.open(
              `Could not like comment (╯°□°)╯︵ ┻━┻`,
              'Dismiss',
              { duration: 8000 }
            );
            } else {
              this.comment.isLiking = !this.comment.isLiking;
              this.comment.likes += (this.comment.isLiking) ? 1 : -1;
            }
        },
        (err: HttpErrorResponse) => {
          this._snackBar.open(
            `Error while trying to like comment (╯°□°)╯︵ ┻━┻`,
            'Dismiss',
            { duration: 15000 }
          );
          console.log(err);
        }
      );
    }
  }
}
