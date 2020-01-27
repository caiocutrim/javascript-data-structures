const LinkedList = require('./linked-list');
const Node = require('./linked-list-models');
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
};

function defaultCompare(a, b) {
  if (a === b) { // {1}
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN; // {2}
}

class SortedLinkedList extends LinkedList {
  constructor(equalsFn = (a, b) => (a === b), compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn; // {3}
  }

  insert(element, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    }
    const pos = this.getIndexNextSortedElement(element);
    return super.insert(element, pos);
  }

  getIndexNextSortedElement(element) {
    let current = this.head;
    let index = 0;
    for(; index < this.size() && current; index++) {
      const comp = this.compareFn(element, current.element);
      if (comp === Compare.LESS_THAN) {
        return index;
      }
      current = current.next;
    }
    return index;
  }

}


const sortedLinkedList = new SortedLinkedList();

sortedLinkedList.insert(1);
sortedLinkedList.insert(2);
sortedLinkedList.insert(3);

console.log(sortedLinkedList.toString());