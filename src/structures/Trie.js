class Trie {
  rootNode = new Map()

  add(item) {
    // check is iterable item
    if (Symbol.iterator in Object(item)) {
      let currentNode = this.rootNode

      // for (const element of item) {
      for (let i = 0; i < item.length; i++) {
        const element = item[i]

        if (currentNode.has(element)) {
          currentNode = currentNode.get(element)
        } else {
          let temp = new Map()
          currentNode.set(element, temp)
          currentNode = temp
        }

        // did we reach the last element yet?
        if (i === item.length - 1) {
          // add signifier for end
          currentNode.set('*', '*')
        }
      }
    }
  }

  exists(item) {
    // check is iterable item
    if (Symbol.iterator in Object(item)) {
      let currentNode = this.rootNode

      for (let i = 0; i < item.length; i++) {
        const element = item[i]
        currentNode = currentNode.get(element)

        if (currentNode === undefined) {
          return false
        }

        // did we reach the last element yet?
        if (i === item.length - 1) {
          // add signifier for end
          return currentNode.has('*')
        }
      }
    }

    return false
  }
}

module.exports = Trie
