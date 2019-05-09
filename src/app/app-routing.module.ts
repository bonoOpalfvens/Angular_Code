import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardExplorerComponent } from './board/board-explorer/board-explorer.component';
import { PostExplorerComponent } from './post/post-explorer/post-explorer.component';

const appRoutes: Routes = [
  { path: 'Boards', component: BoardExplorerComponent },
  { path: 'Posts', component: PostExplorerComponent },
  { path: '', redirectTo: 'Boards', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
