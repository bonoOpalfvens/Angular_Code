import { Component, OnInit } from '@angular/core';
import { CodeDataService } from 'src/app/code-data.service';
import { Observable } from 'rxjs';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-explorer',
  templateUrl: './post-explorer.component.html',
  styleUrls: ['./post-explorer.component.css']
})
export class PostExplorerComponent implements OnInit {
  private _fetchPosts$: Observable<Post[]> = this._codeDataService.posts$;
  constructor(private _codeDataService: CodeDataService) { }

  ngOnInit() {
  }

  get posts() {
    return this._fetchPosts$;
  }
}
