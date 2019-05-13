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

  pageSizeOptions: number[] = [10, 15, 25, 50];
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
