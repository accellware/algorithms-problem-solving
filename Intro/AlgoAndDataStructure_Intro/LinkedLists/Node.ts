export class Node<T> {
    private _previous: Node<T>;
    private _data: T;

    public constructor(previous: Node<T>, data: T){
        this.previous = previous;
        this.data = data;
    }

    
    public get previous() : Node<T> {
        return this._previous;
    }

    public set previous(previous: Node<T>) {
        this._previous = previous;
    }

    public get data() : T {
        return this._data;
    }

    public set data(data: T) {
        this._data = data;
    }
}