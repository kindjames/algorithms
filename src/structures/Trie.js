class Trie {
  rootNode = new Map()

  addWord(word) {
    let currentNode = this.rootNode

    for (const letter of word) {
      if (currentNode.has(letter)) {
        currentNode = currentNode.get(letter)
      } else {
        let temp = new Map()
        currentNode.set(letter, temp)
        currentNode = temp
      }
    }

    if (currentNode.has('*')) {
      return false
    }

    // add signifier for end
    currentNode.set('*', '*')
    return true
  }

  wordExists(word) {
    let currentNode = this.rootNode

    for (const letter of word) {
      currentNode = currentNode.get(letter)

      if (currentNode === undefined) {
        return false
      }
    }

    return currentNode.has('*')
  }
}

module.exports = Trie
