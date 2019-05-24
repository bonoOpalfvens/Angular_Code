import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PostExplorerComponent } from './post/post-explorer/post-explorer.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './navigation/not-found/not-found.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthUserGuard } from './guards/auth-user.guard';
import { PostGuard } from './guards/post.guard';
import { AuthGuard } from './guards/auth.guard';
import { BoardOverviewComponent } from './board/board-overview/board-overview.component';
import { BoardGuard } from './guards/board.guard';
import { BoardDetailComponent } from './board/board-detail/board-detail.component';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { TermsAndConditionsComponent } from './legal/terms-and-conditions/terms-and-conditions.component';
import { PrivacyComponent } from './legal/privacy/privacy.component';

const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent, resolve: { user: AuthUserGuard } },
  { path: 'NotFound', component: NotFoundComponent },

  { path: 'Boards', component: BoardOverviewComponent, resolve: { user: AuthUserGuard }  },
  { path: 'Board/:id', component: BoardDetailComponent, resolve: { board: BoardGuard } },
  { path: 'Board/:id/Create', component: PostCreateComponent, canActivate: [ AuthGuard ] , resolve: { board: BoardGuard } },

  { path: 'Posts', component: PostExplorerComponent },
  { path: 'Post/:id', component: PostDetailComponent, resolve: { post: PostGuard } , runGuardsAndResolvers: 'always'},

  { path: 'User/Login', component: LoginComponent },
  { path: 'User/Register', component: RegisterComponent },
  { path: 'User', component: RegisterComponent, canActivate: [ AuthGuard ] },
  { path: 'User/:username', component: PostDetailComponent, resolve: { post: PostGuard } },

  { path: 'Legal/TermsAndConditions', component: TermsAndConditionsComponent },
  { path: 'Legal/PrivacyPolicy', component: PrivacyComponent },

  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '**', redirectTo: 'NotFound', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
