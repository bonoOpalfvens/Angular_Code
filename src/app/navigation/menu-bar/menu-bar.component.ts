import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  public isHandset$: Observable<boolean> = this._breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));
  public isExpanded = false;

  constructor(
    private _breakpointObserver: BreakpointObserver,
  ) {}
}
