import { Component, OnInit } from '@angular/core';
import { Board } from '../board.model';
import { ActivatedRoute } from '@angular/router';
import { of, Observable } from 'rxjs';
import { Post } from 'src/app/post/post.model';
import { CodeDataService } from 'src/app/services/code-data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit {
  public board: Board;
  public posts: Observable<Post[]>;

  constructor(
    private _codeDataService: CodeDataService,
    private _authService: AuthenticationService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(item =>
      this.board = item.board
    );

    const tempPosts: Post[] = this.board.posts;
    this.board.posts = null;
    this.posts = of(tempPosts.map(p => {
      p.board = this.board;
      return p;
    }));
  }

  get isLiking(): Observable<boolean> {
    return of(this.board.isLiking);
  }

  get likes(): Observable<number> {
    return of(this.board.likes);
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
      this._codeDataService.likeBoard(this.board.id).subscribe(
        val => {
          if (!val) {
            this._snackBar.open(
              `Could not like board (╯°□°)╯︵ ┻━┻`,
              'Dismiss',
              { duration: 8000 }
            );
            } else {
              this.board.isLiking = !this.board.isLiking;
              this.board.likes += (this.board.isLiking) ? 1 : -1;
            }
        },
        (err: HttpErrorResponse) => {
          this._snackBar.open(
            `Error while trying to like board`,
            'Dismiss',
            { duration: 15000 }
          );
          console.log(err);
        }
      );
    }
  }
}
