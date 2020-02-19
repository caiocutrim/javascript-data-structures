const Node = require('./node-tree')
const util = require('./util')
const { Compare, defaultCompare } = util

module.export = class BinarySearchTree {
  constructor (compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.root = null
  }
}
