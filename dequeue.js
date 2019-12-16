const {
  hasSize, 
  hasIsEmpty, 
  hasToString, 
  hasClear
} = require('./composers.js');

const createDequeue = () => {
  const dequeue = {};
  dequeue.count = 0;
  dequeue.lowestCount = 0;
  dequeue.items = {};

  return Object.assign({
    dequeue,
    hasSize(this),
    hasIsEmpty(this),
    hasToString(this),
    hasClear(this),
  });
};
