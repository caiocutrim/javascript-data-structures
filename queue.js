const {
  hasSize, 
  hasIsEmpty, 
  hasToString, 
  hasClear
} = require('./composers.js');

const createQueue = () => {
  const state = {
    count: 0,
    lowestCount: 0,
    items: {},
    enqueue(element) {
      state.items[state.count] = element;
      state.count++;
    },
    dequeue() {
      this.isEmpty();
      const result = state.items[state.lowestCount];
      delete state.items[state.lowestCount];
      state.lowestCount++;
      console.log('-', result);
      return result;
    },
    peek(){
      this.isEmpty();
      return state.items[this.state.lowestCount];
    },
    print() {
      console.log(this.toString());     
    }
  };

  return Object.assign(
    state, 
    hasIsEmpty(state),
    hasSize(state),
    hasClear(state),
    hasToString(state),
  );
}

const newQueue = createQueue();
console.log('is empty? ', newQueue.isEmpty());
console.log('the size is', newQueue.size());
newQueue.enqueue('Jhon');
newQueue.enqueue('Jack');
newQueue.enqueue('Jane');
newQueue.enqueue('Fabi');
newQueue.enqueue('Dani');
newQueue.enqueue('Abraão');
newQueue.print();
newQueue.dequeue();
newQueue.print();
