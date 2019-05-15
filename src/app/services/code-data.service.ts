import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Board } from '../board/board.model';
import { map, share } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Post } from '../post/post.model';

@Injectable({
  providedIn: 'root'
})
export class CodeDataService {

  constructor(private http: HttpClient) { }

  boards$(): Observable<Board[]> {
    return this.http.get(`${environment.apiUrl}/board/`).pipe(
      map((list: any[]): Board[] => list.map(Board.fromJSON)),
      share()
    );
  }

  posts$(): Observable<Post[]> {
    return this.http.get(`${environment.apiUrl}/post/`).pipe(
      map((list: any[]): Post[] => list.map(Post.fromJSON)),
      share()
    );
  }

  post$(id: number): Observable<Post> {
    return this.http.get(`${environment.apiUrl}/post/${id}`).pipe(
      map(Post.fromJSON),
      share()
    );
  }
}
