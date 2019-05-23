import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.model';
import { ActivatedRoute } from '@angular/router';
import { CodeDataService } from '../services/code-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user: User;
  public posts$ = this._codeDataService.posts$();

  constructor(
    private route: ActivatedRoute,
    private _codeDataService: CodeDataService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(item =>
      this.user = item.user
    );
  }
}
