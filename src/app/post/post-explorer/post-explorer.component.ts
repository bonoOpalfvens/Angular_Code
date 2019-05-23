import { Component, Input } from '@angular/core';
import { Post } from '../post.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post-explorer',
  templateUrl: './post-explorer.component.html',
  styleUrls: ['./post-explorer.component.css']
})
export class PostExplorerComponent {
  @Input() posts: Observable<Post[]>;
  private _sortingStrategy;

  public pageSizeOptions: number[] = [10, 15, 25, 50];
  public pageIndex = 0;
  public pageSize = 15;
  public lowValue = 0;
  public highValue = 15;

  getPaginatorData(event) {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    window.scrollTo(0, 0);
  }

  sortByDateAdded = (a: Post, b: Post) => {
    if (a.dateAdded > b.dateAdded) return -1;
    if (a.dateAdded < b.dateAdded) return 1;
    return 0;
  }

  sortByLikes = (a: Post, b: Post) => {
    if (a.likes > b.likes) return -1;
    if (a.likes < b.likes) return 1;
    this.sortByDateAdded(a, b);
  }

  sortByComments = (a: Post, b: Post) => {
    if (a.noComments > b.noComments) return -1;
    if (a.noComments < b.noComments) return 1;
    this.sortByLikes(a, b);
  }

  sort(val: string) {
    switch (val) {
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
    this.posts = this.posts.pipe(
      map(items => items.sort(this._sortingStrategy))
    );
  }
}
