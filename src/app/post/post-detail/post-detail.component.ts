import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CodeDataService } from 'src/app/services/code-data.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public post: Post;

  constructor(
    private route: ActivatedRoute,
    private codeDataService: CodeDataService  
  ) { }

  ngOnInit() {
    this.route.data.subscribe(item =>
      this.post = item['post']
    );
  }

}
