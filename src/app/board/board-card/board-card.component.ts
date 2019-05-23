import { Component, OnInit, Input } from '@angular/core';
import { Board } from '../board.model';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.css']
})
export class BoardCardComponent {
  @Input() board: Board;
}
