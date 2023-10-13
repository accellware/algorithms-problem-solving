import { isNullOrUndefined } from "./Extensions/isNullOrUndefined";
import { Node } from "./Node";

export class LinkedList<T>
{
    private _head: Node<T>;

    public constructor(head: Node<T>) {
        this._head = head;
    }

    public get head() : Node<T> {
        return this._head;
    }
    
    public traverse() {
        let node = this.head;
        while(!isNullOrUndefined(node))
        {
            console.log(`Value: ${node.data}`);
    
            node = node.previous;
        }
    }

    public search(value: T)
    {
        let node = this.head;
        while(!isNullOrUndefined(node))
        {
            if(node.data === value)
            {
                return true;
            }

            node = node.previous;
        }

        return false;
    }

    public append(value: T)
    {
        
    }
}