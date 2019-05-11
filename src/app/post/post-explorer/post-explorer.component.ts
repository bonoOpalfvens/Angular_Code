import { Component, OnInit, ViewChild } from '@angular/core';
import { CodeDataService } from 'src/app/services/code-data.service';
import { Observable } from 'rxjs';
import { Post } from '../post.model';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-post-explorer',
  templateUrl: './post-explorer.component.html',
  styleUrls: ['./post-explorer.component.css']
})
export class PostExplorerComponent implements OnInit {
  private _fetchPosts$: Observable<Post[]> = this._codeDataService.posts$;
  desc: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget odio at turpis ornare posuere. Fusce convallis convallis volutpat. Praesent dignissim tincidunt augue. Vestibulum sed porttitor mi. Fusce suscipit nisi vel mi condimentum, in dictum justo rutrum. Maecenas sit amet lacus diam. Cras sit amet ligula a risus accumsan accumsan quis vel elit. Morbi eget sollicitudin lorem. Suspendisse molestie bibendum arcu, eu hendrerit ex venenatis non. Mauris euismod, risus eu semper vulputate, quam metus tincidunt sem, a hendrerit risus dui a elit. Integer sagittis ut mi in tempus. In non malesuada neque. Nam nec lectus in purus egestas luctus at a erat. Cras molestie ut nisl id blandit. Ut eu sollicitudin nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eget magna a eros blandit elementum euismod quis lectus. Suspendisse ac est quis lorem iaculis dapibus. Integer porttitor dictum velit sit amet euismod. Mauris molestie tempor varius. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. Nullam faucibus tempus nulla vitae efficitur. Morbi non ligula eu nisl sodales pulvinar et at sem. Duis maximus nisi at nunc elementum condimentum. Pellentesque nulla risus, sodales sit amet lacinia eu, congue eu est. Aliquam sodales cursus iaculis. Aliquam sit amet urna a turpis lacinia varius non vitae risus. Nulla vel est mattis, convallis tellus vestibulum, dictum dui. Phasellus nec nulla euismod, posuere felis nec, tincidunt augue. Aenean leo sem, venenatis eu sem id, mattis vestibulum sem. Nam bibendum massa augue, volutpat hendrerit dolor laoreet sed. Nulla ac nunc congue, convallis dui eget, condimentum enim. Morbi tincidunt pellentesque tortor, non malesuada tortor egestas at. Sed egestas enim justo, non congue est tincidunt quis. Phasellus sed porttitor nunc, id feugiat nibh. Nullam tempor facilisis libero, vitae lobortis metus consectetur vulputate. Vivamus ultricies leo mi, in pellentesque metus venenatis sit amet. Vestibulum eu lobortis dolor. Fusce vulputate ornare nisi, in aliquet odio ornare eget. Duis vitae viverra mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Phasellus feugiat purus a purus venenatis cursus. Vestibulum quis ligula finibus, placerat augue quis, vehicula eros. Nulla commodo lorem in porttitor pulvinar. Vivamus et pharetra eros, non hendrerit ex. In pulvinar accumsan ligula, id tristique lacus porta ac. Donec semper mi at consequat venenatis. Ut cursus nunc et condimentum imperdiet. Pellentesque tincidunt fermentum dui vitae malesuada. Suspendisse blandit ipsum ut sollicitudin commodo. Vivamus fermentum, lacus tempor posuere dictum, risus mauris faucibus sapien, at pharetra ex nisi a tellus. Vivamus nulla diam, facilisis in egestas eu, facilisis at nibh. Aenean porttitor dictum neque sit amet finibus. Vestibulum id neque a arcu tincidunt porta. Aliquam imperdiet eros enim, vel viverra justo porttitor a. ";  

  pageSizeOptions: number[] = [10, 15, 25, 50];

  constructor(private _codeDataService: CodeDataService) { }
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
 }
}