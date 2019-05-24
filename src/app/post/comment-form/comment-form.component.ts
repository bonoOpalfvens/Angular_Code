import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';
import { User } from 'src/app/user/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CodeDataService } from 'src/app/services/code-data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  @Input() post: Post;
  public comment: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _codeDataService: CodeDataService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.comment = this._fb.group({
      content: [
        '',
        [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(250)]
      ]
    });
  }
  onSubmit() {
    if (this.comment.valid) {
      this._codeDataService.createComment(this.post.id, this.comment.value.content)
      .subscribe(val => {
        if (val) {
          this._router.navigate([`/Post/${this.post.id}`]);
          this._snackBar.open(
            `Succesfully created comment!`,
            'Dismiss',
            { duration: 8000 }
          );
        } else {
          this._snackBar.open(
            `Could not create comment (╯°□°)╯︵ ┻━┻`,
            'Dismiss',
            { duration: 8000 }
          );
        }
      },
      (err: HttpErrorResponse) => {
        this._snackBar.open(
          `Error while trying to create comment (╯°□°)╯︵ ┻━┻`,
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
