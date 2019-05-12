import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { PostExplorerComponent } from './post-explorer/post-explorer.component';
import { RouterModule } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [PostExplorerComponent, PostDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [PostExplorerComponent]
})
export class PostModule { }
