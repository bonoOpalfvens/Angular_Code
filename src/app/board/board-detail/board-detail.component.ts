import { Component, OnInit } from '@angular/core';
import { Board } from '../board.model';
import { ActivatedRoute } from '@angular/router';
import { of, Observable } from 'rxjs';
import { Post } from 'src/app/post/post.model';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit {
  public board: Board;
  public posts: Observable<Post[]>;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(item =>
      this.board = item.board
    );

    const tempPosts: Post[] = this.board.posts;
    this.board.posts = null;
    this.posts = of(tempPosts.map(p => {
      p.board = this.board;
      return p;
    }));
  }
}
