import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public post: Post;

  pageSizeOptions: number[] = [10, 15, 25, 50];
  pageIndex = 0;
  pageSize = 15;
  lowValue = 0;
  highValue = 15;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(item =>
      this.post = item.post
    );
  }

  getPaginatorData(event) {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    window.scrollTo(0, 0);
  }
}
