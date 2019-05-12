import { Post } from '../post/post.model';

export class Board {
    private _posts = new Array<Post>();

    constructor(
        private _id: number,
        private _name: string,
        private _description: string,
        private _icon: string,
        private _likes: number,
        private _isLiking: boolean
    ){}

    static fromJSON(json: any): Board {
        const obj = new Board(json.id, json.name, json.description, json.icon, json.likes, json.isLiking);
        if(json.posts)
            obj.posts = json.posts.map(Post.fromJSON);

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
    set posts(val: Array<Post>) {
        this._posts = val;
    }
}