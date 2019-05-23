import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Board } from '../board/board.model';
import { map, share } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Post } from '../post/post.model';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class CodeDataService {

  constructor(private http: HttpClient) { }

  // Boards
  topBoards$(): Observable<Board[]> {
    return this.http.get(`${environment.apiUrl}/board/top`).pipe(
      map((list: any[]): Board[] => list.map(Board.fromJSON)),
      share()
    );
  }

  boards$(): Observable<Board[]> {
    return this.http.get(`${environment.apiUrl}/board/`).pipe(
      map((list: any[]): Board[] => list.map(Board.fromJSON)),
      share()
    );
  }

  board$(id: number): Observable<Board> {
    return this.http.get(`${environment.apiUrl}/board/${id}`).pipe(
      map(Board.fromJSON),
      share()
    );
  }

  likeBoard(id: number): any {
    return this.http.post(
      `${environment.apiUrl}/board/${id}/like`,
      { responseType: 'text' }
    );
  }

  // Posts
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

  createPost(boardId: number, title: string, content: string): any {
    return this.http.post(
      `${environment.apiUrl}/post`,
      { boardId, title, content },
      { responseType: 'text' }
    );
  }

  likePost(id: number): any {
    return this.http.post(
      `${environment.apiUrl}/post/${id}/like`,
      { responseType: 'text' }
    );
  }

  // Comments
  likeComment(postId: number, commentId: number): any {
    return this.http.post(
      `${environment.apiUrl}/post/${postId}/comment/${commentId}/like`,
      { responseType: 'text' }
    );
  }

  createComment(postId: number, content: string): any {
    return this.http.post(
      `${environment.apiUrl}/post/${postId}/comment`,
      { content },
      { responseType: 'text' }
    );
  }

  // User
  registerUser(email: string, userName: string, password: string): any {
    return this.http.post(
      `${environment.apiUrl}/account`,
      { email, password, userName },
      { responseType: 'text' }
    );
  }

  loginUser(email: string, password: string): any {
    return this.http.post(
      `${environment.apiUrl}/account/login`,
      { email, password },
      { responseType: 'text' }
    );
  }

  userByEmail(email: string): any {
    return this.http.get(`${environment.apiUrl}/account/byEmail/${email}`).pipe(
      map(User.fromJSON),
      share()
    );
  }

  userByUsername(username: string): any {
    return this.http.get(`${environment.apiUrl}/account/${username}`).pipe(
      map(User.fromJSON),
      share()
    );
  }

  checkUserNameAvailability = (username: string): Observable<boolean> => {
    return this.http.get<boolean>(`${environment.apiUrl}/account/checkusername`, { params: { username } });
  }

  checkEmailAvailability = (email: string): Observable<boolean> => {
    return this.http.get<boolean>(`${environment.apiUrl}/account/checkemail`, { params: { email } });
  }
}
