const LinkedList = require('./linked-list');
const list = new LinkedList();

list.push(10);
list.push(15);
list.push(25);
list.insert(35, 0);

console.log(list.toString());