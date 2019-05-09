import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { PostExplorerComponent } from './post-explorer/post-explorer.component';

@NgModule({
  declarations: [PostExplorerComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class PostModule { }
