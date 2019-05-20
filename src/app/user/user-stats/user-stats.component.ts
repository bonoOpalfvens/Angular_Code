import { Component, Input } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.css']
})
export class UserStatsComponent {
  @Input() user: User;

  constructor() { }
}
