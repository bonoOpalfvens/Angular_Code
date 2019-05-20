import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app-routing.module';
import { UserStatsComponent } from './user-stats/user-stats.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, UserStatsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    UserStatsComponent
  ]
})
export class UserModule { }
