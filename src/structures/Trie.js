class Trie {
  rootNode = new Map()

  add(item) {
    // check is iterable item
    if (Symbol.iterator in Object(item)) {
      let currentNode = this.rootNode

      for (const i of item) {
        if (currentNode.has(i)) {
          currentNode = currentNode.get(i)
        } else {
          let temp = new Map()
          currentNode.set(i, temp)
          currentNode = temp
        }
      }

      currentNode.set()
    }
  }
}

module.exports = Trie
