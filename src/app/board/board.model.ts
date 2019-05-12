import { Post } from '../post/post.model';
import { environment } from 'src/environments/environment';

export class Board {
    constructor(
        private _id: Number,
        private _name: string,
        private _icon: string,
        private _posts = new Array<Post>()
    ){}

    static fromJSON(json: any): Board {
        const obj = new Board(json.id, json.name, json.icon, json.posts);
        return obj;
    }
    get id(): Number {
        return this._id;
    }

    get name(): string{
        return this._name;
    }
    get icon() {
        return {'background-image': `url(${this._icon})`};
    }
    get posts(): Array<Post>{
        return this._posts;
    }
}