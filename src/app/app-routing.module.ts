import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { BoardExplorerComponent } from './board/board-explorer/board-explorer.component';
import { PostExplorerComponent } from './post/post-explorer/post-explorer.component';
import { HomeComponent } from './navigation/home/home.component';
import { NotFoundComponent } from './navigation/not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'NotFound', component: NotFoundComponent },
  { path: 'Boards', component: BoardExplorerComponent },
  { path: 'Posts', component: PostExplorerComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '**', redirectTo: 'NotFound', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }