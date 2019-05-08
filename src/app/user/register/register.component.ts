import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, AbstractControl, ValidatorFn, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: FormGroup;

  constructor(private authService: AuthenticationService, private fb: FormBuilder) {}

  ngOnInit() {
    this.user = this.fb.group({
      email: ['', [Validators.required, Validators.email, serverSideValidateUnique(this.authService.checkEmailAvailability)]],
      username: ['', [Validators.required, serverSideValidateUnique(this.authService.checkUserNameAvailability)]],
      passwordGroup: this.fb.group({
          password: ['', [Validators.required, Validators.minLength(8)]],
          confirmPassword: ['', Validators.required]
        }, { validator: comparePasswords })
    })
  }
}

function comparePasswords(control: AbstractControl): { [key: string]: any } {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password.value === confirmPassword.value ? null : { 'passwordsDiffer': true };
}

function serverSideValidateUnique(checkAvailabilityFn: (n: string) => Observable<boolean>): ValidatorFn {
  return (control: AbstractControl): Observable<{ [key: string]: any }> => {
    return checkAvailabilityFn(control.value).pipe(
      map(available => {
        if (available) {
          return null;
        }
        return { userAlreadyExists: true };
      })
    );
  };
}
