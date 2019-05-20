import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { BoardExplorerComponent } from './board/board-explorer/board-explorer.component';
import { PostExplorerComponent } from './post/post-explorer/post-explorer.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './navigation/not-found/not-found.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthUserGuard } from './guards/auth-user.guard';
import { PostGuard } from './guards/post.guard';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent, resolve: { user: AuthUserGuard } },
  { path: 'NotFound', component: NotFoundComponent },

  { path: 'Boards', component: BoardExplorerComponent },

  { path: 'Posts', component: PostExplorerComponent },
  { path: 'Post/:id', component: PostDetailComponent, resolve: { post: PostGuard } },

  { path: 'User/Login', component: LoginComponent },
  { path: 'User/Register', component: RegisterComponent },
  { path: 'User', component: RegisterComponent, canActivate: [ AuthGuard ] },
  { path: 'User/:username', component: PostDetailComponent, resolve: { post: PostGuard } },

  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '**', redirectTo: 'NotFound', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
