import { LinkedList } from "./LinkedLists";
import { Node } from "./Node";

const node = new Node<number>(null!, 50);
let previous = node.previous = new Node(null!, 5);
previous = previous.previous = new Node(null!, 60);
previous = previous.previous = new Node(null!, 150);

var list = new LinkedList<number>(node);

list.traverse();

console.log(`60 found: ${list.search(60)}`);
console.log(`80 found: ${list.search(80)}`);
console.log(`150 found: ${list.search(150)}`);