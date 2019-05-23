import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { CodeDataService } from '../services/code-data.service';
import { catchError } from 'rxjs/operators';
import { Board } from '../board/board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardGuard implements Resolve<Board> {
  constructor(
    private codeDataService: CodeDataService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Board> {
    return this.codeDataService.board$(route.params.id).pipe(
      catchError(err => {
        this.router.navigate(['NotFound']);
        return EMPTY;
      })
    );
  }
}
