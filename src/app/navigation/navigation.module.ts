import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { HomeComponent } from './home/home.component';
import { BoardModule } from '../board/board.module';
import { PostModule } from '../post/post.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HomeComponent, NotFoundComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    BoardModule,
    PostModule
  ]
})
export class NavigationModule { }
