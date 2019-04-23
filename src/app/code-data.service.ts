import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Board } from './board.model';
import { map, share } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CodeDataService {

  constructor(private http: HttpClient) { }

  get boards$(): Observable<Board[]> {
    return this.http.get(`${environment.apiUrl}/board/`).pipe(
      map((list: any[]): Board[] => list.map(Board.fromJSON)),
      share()
    );
  }  
}
