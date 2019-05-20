import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CodeDataService } from '../services/code-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly _tokenKey = 'currentUser';
  private readonly _emailKey = 'email';
  private _user$: BehaviorSubject<string>;

  constructor(private _codeDataService: CodeDataService) {
    let parsedToken = parseJwt(localStorage.getItem(this._tokenKey));
    if (parsedToken) {
      const expires =
        new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date();
      if (expires) {
        localStorage.removeItem(this._tokenKey);
        localStorage.removeItem(this._emailKey);
        parsedToken = null;
      }
    }
    this._user$ = new BehaviorSubject<string>(
      localStorage.getItem(this._emailKey)
    );
  }

  get user$(): BehaviorSubject<string> {
    return this._user$;
  }

  get token(): string {
    const localToken = localStorage.getItem(this._tokenKey);
    return !!localToken ? localToken : '';
  }

  register(
    email: string,
    userName: string,
    password: string
  ): Observable<boolean> {
    return this._codeDataService.registerUser(email, userName, password).pipe(
      map((token: any) => {
        if (token) {
          localStorage.setItem(this._tokenKey, token);
          localStorage.setItem(this._emailKey, email);
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
          localStorage.setItem(this._emailKey, email);
          this._user$.next(email);
          return true;
        }
        return false;
      })
    );
  }

  logout() {
    if (this._user$.getValue()) {
      localStorage.removeItem(this._tokenKey);
      localStorage.removeItem(this._emailKey);
      this._user$.next(null);
    }
  }
}

function parseJwt(token) {
  if (!token) return null;

  const base64Token = token.split('.')[1];
  const base64 = base64Token.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
}
