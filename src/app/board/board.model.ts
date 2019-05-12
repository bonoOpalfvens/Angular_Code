import { Post } from '../post/post.model';

export class Board {
    constructor(
        private _id: number,
        private _name: string,
        private _description: string,
        private _icon: string,
        private _posts = new Array<Post>(),
        private _likes: number,
        private _isLiking: boolean
    ){}

    static fromJSON(json: any): Board {
        const obj = new Board(json.id, json.name, json.description, json.icon, json.posts, json.likes, json.isLiking);
        console.log(obj);
        return obj;
    }
    get id(): number {
        return this._id;
    }
    get name(): string{
        return this._name;
    }
    get description(): string{
        return this._description;
    }
    get icon() {
        return {'background-image': `url(${this._icon})`};
    }
    get posts(): Array<Post>{
        return this._posts;
    }
    get likes(): number{
        return this._likes;
    }
    get isLiking(): boolean{
        return this._isLiking;
    }
}