import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() public newUser = new EventEmitter();
  public user: FormGroup;

  constructor(
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
        ]
      ],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.authService
      .login(this.user.value.email, this.user.value.password)
      .subscribe(
        val => {
          if (val) {
            this.router.navigate(['/Home']);
            this.snackBar.open(
              `Hello there, ${this.user.value.email}`,
              'Dismiss',
              { duration: 8000 }
            );
          }
        },
        (err: HttpErrorResponse) => {
          if (err.status === 400) {
            this.user.controls.email.setErrors({ login: true });
            this.user.controls.password.setErrors({ login: true });
          } else {
            console.log(err);
            this.snackBar.open(
              `Error while trying to login user: ${this.user.value.email}`,
              'Dismiss',
              { duration: 15000 }
            );
          }
        }
      );
  }

  getErrorMessage(errors: any) {
    if (!errors) return null;
    if (errors.required) return 'Field is required';
    else if (errors.login) return 'Incorrect username or password';
    else if (errors.pattern) return `Invalid format`;
  }
}
