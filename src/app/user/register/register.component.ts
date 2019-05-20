import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  AbstractControl,
  FormBuilder,
  ValidatorFn
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';
import { CodeDataService } from 'src/app/services/code-data.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: FormGroup;
  public errorMsg: string;

  constructor(
    private dataService: CodeDataService,
    private authService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.user = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
          )
        ],
        serverSideValidateEmail(this.dataService.checkEmailAvailability)
      ],
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
          Validators.pattern(/^[A-Za-z0-9_-]+$/)
        ],
        serverSideValidateUsername(this.dataService.checkUserNameAvailability)
      ],
      passwordGroup: this.fb.group(
        {
          password: [
            '',
            [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(30),
              Validators.pattern(
                /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,30}$/
              )
            ]
          ],
          confirmPassword: ['', Validators.required]
        },
        { validator: comparePasswords }
      )
    });
  }

  onSubmit() {
    if (this.user.valid) {
      this.authService
        .register(
          this.user.value.email,
          this.user.value.username,
          this.user.value.passwordGroup.password
        )
        .subscribe(
          val => {
            if (val) {
              this.router.navigate(['/Home']);
              this.snackBar.open(
                `Succesfully registered user: ${this.user.value.email}`,
                'Dismiss',
                { duration: 8000 }
              );
            } else {
              this.snackBar.open(
                `Could not register user: ${this.user.value.email}`,
                'Dismiss',
                { duration: 8000 }
              );
            }
          },
          (err: HttpErrorResponse) => {
            this.snackBar.open(
              `Error while trying to register user: ${this.user.value.email}`,
              'Dismiss',
              { duration: 15000 }
            );
            console.log(err);
          }
        );
    }
  }

  getErrorMessage(errors: any) {
    if (!errors) return null;
    if (errors.required) return 'Field is required';
    else if (errors.minlength)
      return `Field needs at least ${
        errors.minlength.requiredLength
      } characters (got ${errors.minlength.actualLength})`;
    else if (errors.maxlength)
      return `Field can only contain ${
        errors.maxlength.requiredLength
      } characters (got ${errors.maxlength.actualLength})`;
    else if (errors.emailAlreadyExists) return `Email has been taken`;
    else if (errors.usernameAlreadyExists) return `Username has been taken`;
    else if (errors.email) return `Invalid format`;
    else if (errors.passwordsDiffer) return `Passwords do not match`;
    else if (errors.pattern) return `Invalid format`;
  }
}

function comparePasswords(control: AbstractControl): { [key: string]: any } {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password.value === confirmPassword.value
    ? null
    : { passwordsDiffer: true };
}

function serverSideValidateEmail(
  checkAvailabilityFn: (n: string) => Observable<boolean>
): ValidatorFn {
  return (control: AbstractControl): Observable<{ [key: string]: any }> => {
    return checkAvailabilityFn(control.value).pipe(
      map(available => {
        if (available) return null;
        return { emailAlreadyExists: true };
      })
    );
  };
}

function serverSideValidateUsername(
  checkAvailabilityFn: (n: string) => Observable<boolean>
): ValidatorFn {
  return (control: AbstractControl): Observable<{ [key: string]: any }> => {
    return checkAvailabilityFn(control.value).pipe(
      map(available => {
        if (available) return null;
        return { usernameAlreadyExists: true };
      })
    );
  };
}
