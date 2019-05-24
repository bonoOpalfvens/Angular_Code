import { User } from '../user/user.model';

export class Comment {

    constructor(
        private _id: number,
        private _user: User,
        private _dateAdded = new Date(),
        private _content: string,
        private _likes: number,
        private _isLiking: boolean,
        private _postId: number
    ) {}

    static fromJSON(json: any, postId): Comment {
        const obj = new Comment(json.id, User.fromJSON(json.user), json.dateAdded, json.content, json.likes, json.isLiking, postId);
        return obj;
    }

    get id(): number{
        return this._id;
    }
    get user(): User{
        return this._user;
    }
    get dateAdded(): Date{
        return this._dateAdded;
    }
    get content(): string{
        return this._content;
    }
    get likes(): number{
        return this._likes;
    }
    set likes(val: number) {
        this._likes = val;
    }
    get isLiking(): boolean{
        return this._isLiking;
    }
    set isLiking(val: boolean) {
        this._isLiking = val;
    }
    get postId(): number{
        return this._postId;
    }
}