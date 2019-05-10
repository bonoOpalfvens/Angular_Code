import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { PostExplorerComponent } from './post-explorer/post-explorer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PostExplorerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [PostExplorerComponent]
})
export class PostModule { }
