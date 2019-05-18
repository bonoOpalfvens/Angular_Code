import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { CodeDataService } from '../services/code-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly _tokenKey = 'currentUser';
  private _user$: BehaviorSubject<string>;

  constructor(private _codeDataService: CodeDataService) {
    let parsedToken = parseJwt(localStorage.getItem(this._tokenKey));
    if (parsedToken) {
      const expires = new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date();
      if (expires) {
        localStorage.removeItem(this._tokenKey);
        parsedToken = null;
      }
    }
    this._user$ = new BehaviorSubject<string>(parsedToken && parsedToken.unique_name);
  }

  register(email: string, userName: string, password: string): Observable<boolean> {
    return this._codeDataService.registerUser(email, userName, password).pipe(
      map((token: any) => {
        if (token) {
          localStorage.setItem(this._tokenKey, token);
          this._user$.next(email);
          return true;
        }
        return false;
      })
    );
  }

  login(email: string, password: string): Observable<boolean> {
    return this._codeDataService.loginUser(email, password).pipe(
      map((token: any) => {
        if (token) {
          localStorage.setItem(this._tokenKey, token);
          this._user$.next(email);
          return true;
        }
        return false;
      })
    );
  }

  logout() {
    if (this._user$.getValue()) {
      localStorage.removeItem('currentUser');
      this._user$.next(null);
    }
  }
}

function parseJwt(token) {
  if (!token)
    return null;

  const base64Token = token.split('.')[1];
  const base64 = base64Token.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
}
