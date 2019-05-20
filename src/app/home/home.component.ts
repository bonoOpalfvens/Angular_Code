import { Component } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from 'src/app/user/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CodeDataService } from 'src/app/services/code-data.service';
import { debounce, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public user$: Observable<User>;

  constructor(
    private _authService: AuthenticationService,
    private _codeDataService: CodeDataService
  ) {
    this._authService.user$.subscribe(user => {
      if (user) this.user$ = this._codeDataService.userByEmail(user);
      else this.user$ = null;
    });
  }
}
