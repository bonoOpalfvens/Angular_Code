import { Board } from '../board/board.model';
import { User } from '../user/user.model';
import { Comment } from './comment.model';

export class Post {
    private _board: Board;
    private _comments = new Array<Comment>();

    constructor(
        private _id: number,
        private _title: string,
        private _content: string,
        private _user: User,
        private _dateAdded = new Date(),
        private _noComments: number,
        private _likes: number,
        private _isLiking: boolean
    ) {}

    static fromJSON(json: any): Post {
        const obj = new Post(
            json.id,
            json.title,
            json.content,
            User.fromJSON(json.user),
            json.dateAdded,
            json.noComments,
            json.likes,
            json.isLiking
        );

        if (json.board)
            obj._board = Board.fromJSON(json.board);

        if (json.comments) {
            obj._comments = json.comments.map(c => Comment.fromJSON(c, obj.id));
        }
        return obj;
    }

    get id(): number {
        return this._id;
    }
    get title(): string {
        return this._title;
    }
    get content(): string {
        return this._content;
    }
    get board(): Board {
        return this._board;
    }
    set board(val: Board) {
        this._board = val;
    }
    get user(): User {
        return this._user;
    }
    get dateAdded(): Date {
        return this._dateAdded;
    }
    get comments(): Array<Comment> {
        return this._comments;
    }
    get noComments(): number {
        return this._noComments;
    }
    get likes(): number {
        return this._likes;
    }
    set likes(val: number) {
        this._likes = val;
    }
    get isLiking(): boolean {
        return this._isLiking;
    }
    set isLiking(val: boolean) {
        this._isLiking = val;
    }
}
