import { Component, OnInit, ViewChild } from '@angular/core';
import { CodeDataService } from 'src/app/services/code-data.service';
import { Observable } from 'rxjs';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-explorer',
  templateUrl: './post-explorer.component.html',
  styleUrls: ['./post-explorer.component.css']
})
export class PostExplorerComponent implements OnInit {
  private _fetchPosts$: Observable<Post[]> = this._codeDataService.posts$();

  pageSizeOptions: number[] = [10, 15, 25, 50];

  constructor(
    private _codeDataService: CodeDataService
  ) { }

  ngOnInit(){ }

  get posts() {
    return this._fetchPosts$;
  }

  pageIndex:number = 0;
  pageSize:number = 15;
  lowValue:number = 0;
  highValue:number = 15;       

  getPaginatorData(event){
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    window.scrollTo(0, 0);
 }
}