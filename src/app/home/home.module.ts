import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BoardModule } from '../board/board.module';
import { PostModule } from '../post/post.module';
import { UserModule } from '../user/user.module';
import { AuthenticationService } from '../services/authentication.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptor } from '../interceptors/authentication.interceptor';
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  declarations: [HomeComponent, IntroductionComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BoardModule,
    PostModule,
    UserModule
  ],
  providers: [
    AuthenticationService]
})
export class HomeModule { }
