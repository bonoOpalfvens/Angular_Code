import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from '../board.model';
import { CodeDataService } from '../code-data.service';

@Component({
  selector: 'app-board-explorer',
  templateUrl: './board-explorer.component.html',
  styleUrls: ['./board-explorer.component.css']
})
export class BoardExplorerComponent implements OnInit {
  private _fetchBoards$: Observable<Board[]> = this._codeDataService.boards$;
  constructor(private _codeDataService: CodeDataService) { }

  ngOnInit() {
  }

  get boards() {
    return this._fetchBoards$;
  }
}
