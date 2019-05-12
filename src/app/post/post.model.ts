import { Board } from '../board/board.model';

export class Post {
    constructor(
        private _id: number,
        private _title: string,
        private _board: Board,
        private _user: string,
        private _dateAdded = new Date(),
        private _comments = new Array<string>(),
        private _likes: number,
        private _isLiking: boolean
    ){}

    static fromJSON(json: any): Post {
        const obj = new Post(json.id, json.title, Board.fromJSON(json.board), json.user, json.dateAdded, json.comments, json.likes, json.isLiking);
        console.log(obj);
        return obj;
    }

    get id(): number{
        return this._id;
    }
    get title(): string{
        return this._title;
    }
    get board(): Board{
        return this._board;
    }
    get user(): string{
        return this._user;
    }
    get dateAdded(): Date{
        return this._dateAdded;
    }
    get comments(): Array<string>{
        return this._comments;
    }
    get likes(): number{
        return this._likes;
    }
    get isLiking(): boolean{
        return this._isLiking;
    }
}