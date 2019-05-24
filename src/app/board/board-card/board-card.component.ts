import { Component, Input, OnInit } from '@angular/core';
import { Board } from '../board.model';
import { CodeDataService } from 'src/app/services/code-data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Subject, Observable, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.css']
})
export class BoardCardComponent implements OnInit {
  @Input() board: Board;

  constructor(
    private _codeDataService: CodeDataService,
    private _authService: AuthenticationService,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) {}

  ngOnInit() {
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
