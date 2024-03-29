import { Board } from '../board/board.model';
import { Post } from '../post/post.model';

export class User {
  private _boards = new Array<Board>();
  private _likedPosts = new Array<Post>();
  private _createdPosts = new Array<Post>();

  constructor(
    private _id: number,
    private _userName: string,
    private _displayName: string,
    private _avatar: string,
    private _email: string,
    private _emailIsPrivate: boolean,
    private _firstName: string,
    private _lastName: string,
    private _description: string,
    private _github: string,
    private _noLikedPosts: number,
    private _noCreatedPosts: number,
    private _noCreatedComments: number
  ) {}

  static fromJSON(json: any): User {
    const obj = new User(
      json.id,
      json.userName,
      json.displayName,
      json.avatar,
      json.email,
      json.emailIsPrivate,
      json.firstName,
      json.lastName,
      json.description,
      json.github,
      json.noLikedPosts,
      json.noCreatedPosts,
      json.noCreatedComments
    );
    if (json.boards) {
      obj.boards = json.boards.map(b => {
        const board = Board.fromJSON(b);
        board.isLiking = true;
        return board;
      });
    }

    return obj;
  }

  get id(): number {
    return this._id;
  }
  get userName(): string {
    return this._userName;
  }
  get displayName(): string {
    return this._displayName;
  }
  get avatar() {
    return { 'background-image': `url(${this._avatar})` };
  }
  get email(): string {
    return this._email;
  }
  get emailIsPrivate(): boolean {
    return this._emailIsPrivate;
  }
  get firstName(): string {
    return this._firstName;
  }
  get lastName(): string {
    return this._lastName;
  }
  get description(): string {
    return this._description;
  }
  get github(): string {
    return this._github;
  }
  get noLikedPosts(): number {
    return this._noLikedPosts;
  }
  get noCreatedPosts(): number {
    return this._noCreatedPosts;
  }
  get noCreatedComments(): number {
    return this._noCreatedComments;
  }
  get boards(): Board[] {
    return this._boards;
  }
  set boards(val: Board[]) {
      this._boards = val;
  }
  get likedPosts(): Post[] {
    return this._likedPosts;
  }
  get createdPosts(): Post[] {
    return this._createdPosts;
  }
}
