
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatTooltipModule, MatInputModule, MatFormFieldModule, MatAutocompleteModule, MatCardModule, MatListModule, MatGridListModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

// Custom Components
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { BoardExplorerComponent } from './board-explorer/board-explorer.component';
import { PostExplorerComponent } from './post-explorer/post-explorer.component';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BoardExplorerComponent,
    PostExplorerComponent
  ],
  imports: [
    BrowserModule,
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

    ReactiveFormsModule,
    HttpClientModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
