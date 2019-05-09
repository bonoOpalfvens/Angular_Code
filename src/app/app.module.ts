import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Custom Components
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MaterialModule } from './material.module';
import { BoardModule } from './board/board.module';
import { PostModule } from './post/post.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    UserModule,
    MaterialModule,
    BoardModule,
    PostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
