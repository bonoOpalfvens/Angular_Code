import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';
import { Post } from './post.model';
import { CodeDataService } from '../services/code-data.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostGuard  implements Resolve<Post> {
  constructor(
    private codeDataService: CodeDataService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> {
    return this.codeDataService.post$(route.params['id']).pipe(
      catchError(err => {
        this.router.navigate(['NotFound']);
        return EMPTY;
      })
    );
  }
}
