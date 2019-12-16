
const hasSize = ( state ) => ({
  size() { 
    return state.count - state.lowestCount;
  }
});

const hasIsEmpty = ( state ) => ({
  isEmpty() {
    return state.size() === 0 || undefined;
  }
});

const hasClear  = ( state ) => ({
  clear() {
    state.items = {};
    state.count = 0;
    state.lowestCount = 0;
  },
});

const hasToString = ( state ) => ({
  toString() {
    if (state.isEmpty()) {
      return '';
    }
    let objString = `${state.items[state.lowestCount]}`;
    for (let i = state.lowestCount + 1; i < state.count; i++) {
      objString = `${objString}, ${state.items[i]}`;
    }
    return objString;
  } 
});

module.exports = {hasSize, hasIsEmpty, hasToString, hasClear};
