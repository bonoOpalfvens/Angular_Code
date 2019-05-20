import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { User } from 'src/app/user/user.model';
import { CodeDataService } from 'src/app/services/code-data.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  public isHandset$: Observable<boolean> = this._breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));
  public isExpanded = false;
  public user$: Observable<User>;

  constructor(
    private _breakpointObserver: BreakpointObserver,
    private _authService: AuthenticationService,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _codeDataService: CodeDataService
  ) {
    this._authService.user$.pipe().subscribe(user => {
      if (user) this.user$ = this._codeDataService.userByEmail(user);
      else this.user$ = null;
    });
  }

  logout() {
    this._authService.logout();
    this._router.navigate(['/User/Login']);
    this._snackBar.open(`Logged out`, 'Dismiss', { duration: 8000 });
  }
}
