import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Post } from '../post.model';
import { CodeDataService } from 'src/app/services/code-data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatSnackBar } from '@angular/material';
import { Observable, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/user/user.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit, OnDestroy {
  public post: Post;
  public loggedIn: boolean;
  public user: User;
  private _clicked = false;
  private _navigationSubscription;

  pageSizeOptions: number[] = [10, 15, 25, 50];
  pageIndex = 0;
  pageSize = 15;
  lowValue = 0;
  highValue = 15;

  constructor(
    private _codeDataService: CodeDataService,
    private _authService: AuthenticationService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this._navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) this._clicked = false;
    });
  }

  ngOnInit() {
    this.route.data.subscribe(item =>
      this.post = item.post
    );
    this.loggedIn = this._authService.token ? true : false;
  }

  getPaginatorData(event) {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    window.scrollTo(0, 0);
  }

  get clicked(): Observable<boolean> {
    return of(this._clicked);
  }

  get isLiking(): Observable<boolean> {
    return of(this.post.isLiking);
  }

  get likes(): Observable<number> {
    return of(this.post.likes);
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
      this._codeDataService.likePost(this.post.id).subscribe(
        val => {
          if (!val) {
            this._snackBar.open(
              `Could not like post (╯°□°)╯︵ ┻━┻`,
              'Dismiss',
              { duration: 8000 }
            );
            } else {
              this.post.isLiking = !this.post.isLiking;
              this.post.likes += (this.post.isLiking) ? 1 : -1;
            }
        },
        (err: HttpErrorResponse) => {
          this._snackBar.open(
            `Error while trying to like post (╯°□°)╯︵ ┻━┻`,
            'Dismiss',
            { duration: 15000 }
          );
          console.log(err);
        }
      );
    }
  }
  loadComment() {
    this._clicked = !this._clicked;
  }
  toLogin() {
    this.router.navigate(['/User/Login']);
  }

  ngOnDestroy() {
    if (this._navigationSubscription) {
      this._navigationSubscription.unsubscribe();
    }
  }
}
