
class Set {
  constructor() {
    this.items = {};
  }

  has (element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  add (element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  delete (element) {
    if (this.has(element)) {
      let { [element]: _, ...noElement } = this.items;
      this.items = noElement;
      return true;
    }
    return false;
  }

  clear() {
    this.items = {};
  }

  size () {
    return Object.keys(this.items).length;
  }

  values () {
    return Object.values(this.items);
  }
  
  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach(value => unionSet.add(value));
    otherSet.values().forEach(value => unionSet.add(value));
    return unionSet;
  }

  intersection (otherSet) {
    const intersectionSet = new Set();
    const values = this.values();
    const otherValues= otherSet.values();
    let biggerSet = values;
    let smallerSet = otherValues;
    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }
    smallerSet.forEach(value => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    });
    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new Set();
    this.values().forEach(value => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }

  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) { // {1}
      return false;
    }
    let isSubset = true; // {2}
    this.values().every(value => { // {3} 
      if (!otherSet.has(value)) { // {4}
        isSubset = false; // {5}
        return false;
      }
      return true; // {6}
    });
    return isSubset; // {7}
  }
} 

const setA = new Set(); 
setA.add(1); 
setA.add(2); 
 
const setB = new Set(); 
setB.add(1); 
setB.add(2); 
setB.add(3); 
 
const setC = new Set(); 
setC.add(2); 
setC.add(3); 
setC.add(4); 
 
console.log(setA.isSubsetOf(setB)); 
console.log(setA.isSubsetOf(setC)); 