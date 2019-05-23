import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Board } from '../board.model';
import { CodeDataService } from 'src/app/services/code-data.service';

@Component({
  selector: 'app-board-overview',
  templateUrl: './board-overview.component.html',
  styleUrls: ['./board-overview.component.css']
})
export class BoardOverviewComponent implements OnInit {
  public user: User;
  private _fetchBoards$: Observable<Board[]> = this._codeDataService.boards$();

  constructor(
    private _codeDataService: CodeDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(item =>
      this.user = item.user
    );
  }

  get boards() {
    return this._fetchBoards$;
  }
}
