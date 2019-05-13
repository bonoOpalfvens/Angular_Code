import { Board } from '../board/board.model';
import { User } from '../user/user.model';
import { Comment } from './comment.model';

export class Post {
    private _board: Board;

    constructor(
        private _id: number,
        private _title: string,
        private _content: string,
        private _user: User,
        private _dateAdded = new Date(),
        private _comments = new Array<Comment>(),
        private _likes: number,
        private _isLiking: boolean
    ){}

    static fromJSON(json: any): Post {
        const obj = new Post(json.id, json.title, json.content, User.fromJSON(json.user), json.dateAdded, json.comments.map(Comment.fromJSON), json.likes, json.isLiking);
        if(json.board)
            obj.board = Board.fromJSON(json.board);

        return obj;
    }

    get id(): number{
        return this._id;
    }
    get title(): string{
        return this._title;
    }
    get content(): string{
        return this._content;
    }
    get board(): Board{
        return this._board;
    }
    get user(): User{
        return this._user;
    }
    get dateAdded(): Date{
        return this._dateAdded;
    }
    get comments(): Array<Comment>{
        return this._comments;
    }
    get likes(): number{
        return this._likes;
    }
    get isLiking(): boolean{
        return this._isLiking;
    }
    set board(val: Board){
        this._board = val;
    }
}