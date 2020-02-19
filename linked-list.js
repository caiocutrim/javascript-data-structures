class LinkedList {
  constructor (equalsFn = defaultEquals) {
    this.count = 0 // {2}
    this.head = undefined // {3}
    this.equalsFn = equalsFn // {4}
  }

  push (element) {
    const node = new Node(element) // {1}
    let current // {2}
    if (this.head == null) { // {3}
      this.head = node
    } else {
      current = this.head // {4}
      while (current.next != null) { // {5} get last item
        current = current.next
      }
      // and assign next to new element to make the link
      current.next = node // {6}
    }
    this.count++ // {7}
  }

  getElementAt (index) {
    if (index >= 0 && index <= this.count) { // {1}
      let node = this.head // {2}
      for (let i = 0; i < index && node != null; i++) { // {3}
        node = node.next
      }
      return node // {4}
    }
    return undefined // {5}
  }

  removeAt (index) {
    if (index >= 0 && index < this.count) {
      let current = this.head

      if (index === 0) {
        this.head = current.next
      } else {
        const previous = this.getElementAt(index - 1)
        current = previous.next
        previous.next = current.next
      }
      this.count--
      return current.element
    }
    return undefined
  }

  insert (element, index) {
    if (index >= 0 && index <= this.count) { // {1}
      const node = new Node(element)
      if (index === 0) { // add on first position
        const current = this.head
        node.next = current // {2}
        this.head = node
      } else {
        const previous = this.getElementAt(index - 1) // {3}
        const current = previous.next // {4}
        node.next = current // {5}
        previous.next = node // {6}
      }
      this.count++ // update size of list
      return true
    }
    return false // {7}
  }

  indexOf (element) {
    let current = this.head // {1}
    for (let i = 0; i < this.count && current != null; i++) { // {2}
      if (this.equalsFn(element, current.element)) { // {3}
        return i // {4}
      }
      current = current.next // {5}
    }
    return -1
  }

  remove (element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  size () {
    return this.count
  }

  isEmpty () {
    return this.size() === 0
  }

  getHead () {
    return this.head
  }

  toString () {
    if (this.head == null) { // {1}
      return ''
    }
    let objString = `${this.head.element}` // {2}
    let current = this.head.next // {3}
    for (let i = 1; i < this.size() && current != null; i++) { // {4}
      objString = `${objString},${current.element}`
      current = current.next
    }
    return objString // {5}
  }
}

module.exports = LinkedList
