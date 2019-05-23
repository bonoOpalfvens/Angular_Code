import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/board/board.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CodeDataService } from 'src/app/services/code-data.service';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  public board: Board;
  public post: FormGroup;

  constructor(
    private _route: ActivatedRoute,
    private _fb: FormBuilder,
    private _codeDataService: CodeDataService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this._route.data.subscribe(item => (this.board = item.board));

    this.post = this._fb.group({
      title: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
      ],
      content: [
        '',
        [Validators.required],
        Validators.minLength(30),
        Validators.maxLength(10000)
      ]
    });
  }

  onSubmit() {
    if (this.post.valid) {
      this._codeDataService.createPost(this.post.value.title, this.post.value.content)
      .subscribe(val => {
        if (val) {
          this._router.navigate([`/Post/${val}`]);
          this._snackBar.open(
            `Succesfully created post!`,
            'Dismiss',
            { duration: 8000 }
          );
        } else {
          this._snackBar.open(
            `Could not create post (╯°□°)╯︵ ┻━┻`,
            'Dismiss',
            { duration: 8000 }
          );
        }
      },
      (err: HttpErrorResponse) => {
        this._snackBar.open(
          `Error while trying to create post`,
          'Dismiss',
          { duration: 15000 }
        );
        console.log(err);
      });
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
  }
}
