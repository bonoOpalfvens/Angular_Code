import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from '../app-routing.module';
import { LoaderComponent } from './loader/loader.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderService } from '../services/loader.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from '../interceptors/loader.interceptor';
import { AuthenticationService } from '../services/authentication.service';
import { AuthenticationInterceptor } from '../interceptors/authentication.interceptor';

@NgModule({
  declarations: [MenuBarComponent, LoaderComponent, NotFoundComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [MenuBarComponent, LoaderComponent],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true }]
})
export class NavigationModule { }
