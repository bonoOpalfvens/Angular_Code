import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';
import { User } from './user/user.model';
import { CodeDataService } from './services/code-data.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements Resolve<User> {
  constructor(
    private _codeDataService: CodeDataService,
    private _authService: AuthenticationService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    if (this._authService.user$.getValue())
    return this._codeDataService.userByEmail(this._authService.user$.getValue()).pipe(
      catchError(() => {
        return EMPTY;
      })
    );
  }
}
