import { Board } from './board.model';

export class Post {
    constructor(
        private _title: string,
        private _board = new Array<Board>(),
        private _user: string,
        private _dateAdded = new Date(),
        private _comments = new Array<string>(),
        private _likes = new Array<string>()
    ){}

    static fromJSON(json: any): Post {
        const obj = new Post(json.title, json.board, json.user, json.dateAdded, json.comments, json.likes);
        return obj;
    }

    get title(): string{
        return this._title;
    }
    /*get board(): Board{
        return this._board;
    }*/
    get user(): string{
        return this._user;
    }
    get dateAdded(): Date{
        return this._dateAdded;
    }
    get comments(): Array<string>{
        return this._comments;
    }
    get likes(): Array<string>{
        return this._likes;
    }
}