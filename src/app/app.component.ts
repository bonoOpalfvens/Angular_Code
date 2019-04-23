import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from './board.model';
import { CodeDataService } from './code-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Code-App';

  constructor() {}

  ngOnInit(): void {
  }

}
