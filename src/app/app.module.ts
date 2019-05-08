
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatTooltipModule, MatInputModule, MatFormFieldModule, MatAutocompleteModule, MatCardModule, MatListModule, MatGridListModule, MatSidenavModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Custom Components
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { BoardExplorerComponent } from './board-explorer/board-explorer.component';
import { PostExplorerComponent } from './post-explorer/post-explorer.component';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';

const appRoutes: Routes = [
  { path: 'Boards', component: BoardExplorerComponent },
  { path: 'Posts', component: PostExplorerComponent },
  { path: '', redirectTo: 'post-explorer', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BoardExplorerComponent,
    PostExplorerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    // AngularMaterialAnimations
    BrowserAnimationsModule,
    // AngularMaterial
    MatToolbarModule,
    MatMenuModule, 
    MatButtonModule,
    MatIconModule, 
    MatTooltipModule, 
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,

    ReactiveFormsModule,
    HttpClientModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
