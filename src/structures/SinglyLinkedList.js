const { inspect } = require('util')

class Node {
  value
  next
  constructor(value, next = undefined) {
    this.value = value
    this.next = next
  }
}

class SinglyLinkedList {
  head
  length = 0

  add(value) {
    if (this.head === undefined) {
      this.head = new Node(value)
    } else {
      let cursor = this.head
      while (cursor.next !== undefined) {
        cursor = cursor.next
      }
      cursor.next = new Node(value)
    }
    this.length++
  }

  insertAt(index, value) {
    if (index === 0) {
      this.head = new Node(value, this.head)
    } else {
      if (index < 0 || index + 1 > this.length) {
        throw new Error('index out of bounds')
      }

      let current = this.head, previous

      for (let i = 0; i < index; i++) {
        previous = current
        current = current.next
      }

      previous.next = new Node(value, current)
    }
    this.length++
  }

  removeAt(index) {
    if (index < 0 || index + 1 > this.length) {
      throw new Error('index out of bounds')
    }

    if (index === 0) {
      this.head = this.head.next
    } else {
      let previous, current = this.head, next

      for (let i = 0; i < index; i++) {
        previous = current
        current = current.next
      }

      next = current.next
      previous.next = next
      current = undefined
    }
    this.length--
  }

  get length() {
    return this.length
  }

  reverse() {
    if (this.head !== undefined && this.head.next !== undefined) {
      let previous, current = this.head, next

      while (current !== undefined) {
        next = current.next
        current.next = previous
        previous = current
        current = next
      }

      this.head = previous
    }
  }

  toString() {
    const values = []

    if (this.head !== undefined) {
      let current = this.head
      while (current !== undefined) {
        values.push(current.value.toString())
        current = current.next
      }
    }

    return inspect(values, false, 5, true)
  }

  toArray() {
    const values = []

    if (this.head !== undefined) {
      let current = this.head
      while (current !== undefined) {
        values.push(current.value.toString())
        current = current.next
      }
    }

    return values
  }
}

module.exports = SinglyLinkedList
