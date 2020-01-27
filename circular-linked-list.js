const LinkedList = require('./linked-list');
const Node = require('./linked-list-models');

class CircularLinkedList extends LinkedList {
  constructor (equalsFn = (a, b) => (a === b)) {
    super(equalsFn);
  }
  
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          this.head = node; // {1}
          node.next = this.head; // {2} NEW
        } else {
          node.next = current; // {3}
          current = this.getElementAt(this.size()); // {4}
          // update last element
          this.head = node; // {5}
          current.next = this.head; // {6} NEW
        }
      } else { // no changes in this scenario
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        if (this.size() === 1) {
          this.head = undefined;
        } else {
          const removed = this.head; // {1}
          current = this.getElementAt(this.size()); // {2} NEW
          this.head = this.head.next; // {3}
          current.next = this.head; // {4}
          current = removed; // {5}
        }
      } else {
        // no need to update last element for circular list
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element; // {6}
    }
    return undefined;
  }
}

const circularLinkeList = new CircularLinkedList();

circularLinkeList.insert(1, 0);
circularLinkeList.insert(2, 1);
circularLinkeList.insert(3, 2);
circularLinkeList.insert(4, 3);
console.log(circularLinkeList.toString());