import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { HomeComponent } from './home/home.component';
import { BoardModule } from '../board/board.module';
import { PostModule } from '../post/post.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoaderComponent } from './loader/loader.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderService } from '../services/loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from '../interceptor';

@NgModule({
  declarations: [MenuBarComponent, LoaderComponent, HomeComponent, NotFoundComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BoardModule,
    PostModule
  ],
  exports: [MenuBarComponent, LoaderComponent],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }]
})
export class NavigationModule { }
