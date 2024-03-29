import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { PostExplorerComponent } from './post-explorer/post-explorer.component';
import { RouterModule } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { CommentFormComponent } from './comment-form/comment-form.component';

@NgModule({
  declarations: [PostExplorerComponent, PostDetailComponent, PostCardComponent, PostCreateComponent, CommentCardComponent, CommentFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  exports: [PostExplorerComponent]
})
export class PostModule { }
