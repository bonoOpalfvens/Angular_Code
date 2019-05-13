import { Component, OnInit, ViewChild } from '@angular/core';
import { CodeDataService } from 'src/app/services/code-data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Post } from '../post.model';

@Component({
  selector: 'app-post-explorer',
  templateUrl: './post-explorer.component.html',
  styleUrls: ['./post-explorer.component.css']
})
export class PostExplorerComponent implements OnInit {
  private _fetchPosts$: Observable<Post[]> = this._codeDataService.posts$();
  private _sortingStrategy: function;

  pageSizeOptions: number[] = [10, 15, 25, 50];

  constructor(
    private _codeDataService: CodeDataService
  ) { }

  ngOnInit(){ 
    this.sort('dateAdded');
  }

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

  sortByDateAdded = (a: Post, b: Post) => {
    if(a.dateAdded > b.dateAdded)
      return -1;
    if(a.dateAdded < b.dateAdded)
      return 1;
    return 0;
  }

  sortByLikes = (a: Post, b: Post) => {
    if(a.likes > b.likes)
      return -1;
    if(a.likes < b.likes)
      return 1;
    this.sortByDateAdded(a, b);
  }

  sortByComments = (a: Post, b: Post) => {
    if(a.comments.length > b.comments.length)
      return -1;
    if(a.comments.length < b.comments.length)
      return 1;
    this.sortByLikes(a, b);
  }

  sort(val: string) {
    switch(val){
      case 'dateAdded':
        this._sortingStrategy = this.sortByDateAdded;
      break;
      case 'likes':
        this._sortingStrategy = this.sortByLikes;
      break;
      case 'comments':
        this._sortingStrategy = this.sortByComments;
      break;
    } 
    this._fetchPosts$ = this._fetchPosts$.pipe(map(items => items.sort(this._sortingStrategy)));
  }
}