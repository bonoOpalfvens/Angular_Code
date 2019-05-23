import { Component, OnInit } from '@angular/core';
import { Board } from '../board.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit {
  public board: Board;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(item =>
      this.board = item.board
    );
  }
}
