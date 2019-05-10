import { Board } from '../board/board.model';

export class Post {
    constructor(
        private _id: Number,
        private _title: string,
        private _boardId: Number,
        private _boardIcon: string,
        private _boardName: string,
        private _user: string,
        private _dateAdded = new Date(),
        private _comments = new Array<string>(),
        private _likes = new Array<string>()
    ){}

    static fromJSON(json: any): Post {
        const obj = new Post(json.id, json.title, json.boardId, json.boardIcon, json.boardName, json.user, json.dateAdded, json.comments, json.likes);
        return obj;
    }

    get id(): Number{
        return this._id;
    }
    get title(): string{
        return this._title;
    }
    get boardId(): Number{
        return this._boardId;
    }
    get boardIcon() {
        return {'background-image': `url(${this._boardIcon})`};
    }
    get boardName(): string{
        return this._boardName;
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
    get likes(): Array<string>{
        return this._likes;
    }
}