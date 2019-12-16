// Stack is the easiest data structure in computer science
// that follows the first-in-first-out rule which means:
// the first element that has added is the element that must be removed.
// There are some additional helper methods in the stack class
let _items = Symbol();
class Stack {
  constructor() {
    this[_items] = [];
  }

  push(element) {
    this._items.push(element)
  }

  pop() {
    return this._items.pop();
  }

  peek() {
    return this._items[this._items.length -1];
  }

  isEmpty() {
    return this._items.length === 0;
  }

  size() {
    return this._items.length;
  }

  clear() {
    return this._items.length = 0;
  }

  print() {
    console.log(this._items.toString());
  }
}

let stack = new Stack();

stack.push(5);
stack.push(8);
stack.push(11);
stack.push(15);
stack.print();
stack.pop();
stack.print();
stack.pop();
stack.print();
console.log('get the last', stack.peek());
