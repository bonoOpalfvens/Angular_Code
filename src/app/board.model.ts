import { Post } from './post.module';

export class Board {
    constructor(
        private _name: string,
        private _icon: string,
        private _posts = new Array<Post>()
    ){}

    static fromJSON(json: any): Board {
        const obj = new Board(json.name, json.icon, json.posts);
        return obj;
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