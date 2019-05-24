import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.model';
import { ActivatedRoute } from '@angular/router';
import { CodeDataService } from 'src/app/services/code-data.service';
import { Observable } from 'rxjs';
import { Board } from '../board.model';

@Component({
  selector: 'app-board-overview',
  templateUrl: './board-overview.component.html',
  styleUrls: ['./board-overview.component.css']
})
export class BoardOverviewComponent implements OnInit {
  public user: User;
  public _boards: Observable<Board[]>;

  constructor(
    private _codeDataService: CodeDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(item =>
      this.user = item.user
    );
    if (this.user) {
      this._boards = this._codeDataService.notLikedBoards$();
    } else {
      this._boards = this._codeDataService.boards$();
    }
  }

  get boards() {
    return this._boards;
  }
}
