const defaultToString = require('./util')
const ValuePair = require('./value-pair')
const LinkedList = require('./linked-list')

class HashTable {
  constructor (toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  loseloseHashCode (key) {
    if (typeof key === 'number') {
      return key
    }
    const tableKey = this.toStrFn(key)
    let hash = 0
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i)
    }
    return hash % 37
  }

  hashCode (key) {
    return this.loseloseHashCode(key)
  }

  put (key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      this.table[position] = new ValuePair(key, value)
      return true
    }
    return false
  }

  isEmpty () {
    return Object.keys(this.table).length == 0
  }

  get (key) {
    const valuePair = this.table[this.hashCode(key)]
    return valuePair == null ? undefined : valuePair.value
  }

  remove (key) {
    const hash = this.hashCode(key)
    const valuePair = this.table[hash]
    if (valuePair != null) {
      delete this.table[hash]
      return true
    }
    return false
  }

  toString () {
    if (this.isEmpty()) {
      return ''
    }
    const keys = Object.keys(this.table)
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString},{${keys[i]} => ${this.table[keys[i]].toString()}}`
    }
    return objString
  }
}

const hash = new HashTable()
hash.put('Ygritte', 'ygritte@email.com')
hash.put('Jonathan', 'jonathan@email.com')
hash.put('Jamie', 'jamie@email.com')
hash.put('Jack', 'jack@email.com')
hash.put('Jasmine', 'jasmine@email.com')
hash.put('Jake', 'jake@email.com')
hash.put('Nathan', 'nathan@email.com')
hash.put('Athelstan', 'athelstan@email.com')
hash.put('Sue', 'sue@email.com')
hash.put('Aethelwulf', 'aethelwulf@email.com')
hash.put('Sargeras', 'sargeras@email.com')

console.log(hash.toString())

class HashTableSeparateChaining extends HashTable {
  constructor (toStrFn = defaultToString) {
    super()
    this.toStrFn = toStrFn
    this.table = {}
  }

  put (key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      if (this.table[position] == null) { // {1}
        this.table[position] = new LinkedList() // {2}
      }
      this.table[position].push(new ValuePair(key, value)) // {3}
      return true
    }
    return false
  }

  get (key) {
    const position = this.hashCode(key)
    const linkedList = this.table[position] // {1}
    if (linkedList != null && !linkedList.isEmpty()) { // {2}
      let current = linkedList.getHead() // {3}
      while (current != null) { // {4}
        if (current.element.key === key) { // {5}
          return current.element.value // {6}
        }
        current = current.next // {7}
      }
    }
    return undefined // {8}
  }

  remove (key) {
    const position = this.hashCode(key)
    const linkedList = this.table[position]
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead()
      while (current != null) {
        if (current.element.key === key) { // {1}
          linkedList.remove(current.element) // {2}
          if (linkedList.isEmpty()) { // {3}
            delete this.table[position] // {4}
          }
          return true // {5}
        }
        current = current.next // {6}
      }
    }
    return false // {7}
  }
}

class HashTableLinearProbingLazy extends HashTable {
  constructor (toStrFn = defaultToString) {
    super()
    this.toStrFn = toStrFn
    this.table = {}
  }

  put (key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key)
      if (this.table[position] == null) {
        // {1}
        this.table[position] = new ValuePair(key, value) // {2}
      } else {
        let index = position + 1 // {3}
        while (this.table[index] != null) {
          // {4}
          index++ // {5}
        }
        this.table[index] = new ValuePair(key, value) // {6}
      }
      return true
    }
    return false
  }

  get (key) {
    const position = this.hashCode(key)
    if (this.table[position] != null) { // {1}
      if (this.table[position].key === key) { // {2}
        return this.table[position].value // {3}
      }
      let index = position + 1 // {4}
      while (this.table[index] != null && this.table[index].key !== key) { // {5}
        index++
      }
      if (this.table[index] != null && this.table[index].key === key) { // {6}
        return this.table[position].value // {7}
      }
    }
    return undefined // {8}
  }
}
