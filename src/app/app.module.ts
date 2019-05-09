import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Custom Components
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { BoardModule } from './board/board.module';
import { PostModule } from './post/post.module';
import { NavigationModule } from './navigation/navigation.module';
import { MenuBarComponent } from './navigation/menu-bar/menu-bar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,

    NavigationModule,
    UserModule,
    MaterialModule,
    BoardModule,
    PostModule,
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
