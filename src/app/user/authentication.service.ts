import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly _tokeyKey = 'currentUser';
  private _user$: BehaviorSubject<string>;

  constructor(private http: HttpClient) {
    let parsedToken = parseJwt(localStorage.getItem(this._tokeyKey));
    if (parsedToken) {
      const expires = new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date();
      if (expires) {
        localStorage.removeItem(this._tokeyKey);
        parsedToken = null;
      }
    }
    this._user$ = new BehaviorSubject<string>(parsedToken && parsedToken.unique_name);
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post(
      `${environment.apiUrl}/account/login`,
      { email, password },
      { responseType: 'text' }
    ).pipe(
      map((token: any) => {
        if (token) {
          localStorage.setItem(this._tokeyKey, token);
          this._user$.next(email);
          return true;
        } else {
          return false;
        }
      })
    );
  }

  register(email: string, userName: string, password: string): Observable<boolean> {
    return this.http.post(
      `${environment.apiUrl}/account`,
      { email, userName, password, passwordConfirmation : password },
      { responseType: 'text' }
    ).pipe(
      map((token: any) => {
        if (token) {
          localStorage.setItem(this._tokeyKey, token);
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

  checkUserNameAvailability = (username: string): Observable<boolean> => {
    return this.http.get<boolean>(`${environment.apiUrl}/account/checkusername`, { params: { username } });
  }

  checkEmailAvailability = (email: string): Observable<boolean> => {
    return this.http.get<boolean>(`${environment.apiUrl}/account/checkemail`, { params: { email } });
  }
}

function parseJwt(token) {
  if (!token)
    return null;

  const base64Token = token.split('.')[1];
  const base64 = base64Token.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
}
