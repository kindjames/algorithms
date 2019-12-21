class Node {
  key
  value
  left
  right
  constructor(key, value) {
    this.key = key
    this.value = value
  }
}

class BinarySearchTree {
  root

  set(key, value) {
    if (this.root === undefined) {
      this.root = new Node(key, value)
    } else {
      this.insertNode(this.root, key, value)
    }
  }

  insertNode(node, key, value) {
    if (key < node.key) {
      // larger keys to the left
      if (node.left === undefined) {
        node.left = new Node(key, value)
      } else {
        this.insertNode(node.left, key, value)
      }
    } else {
      // smaller keys to the right
      if (node.right === undefined) {
        node.right = new Node(key, value)
      } else {
        this.insertNode(node.right, key, value)
      }
    }
  }

  get(key) {
    return this._search(this.root, key)
  }

  _search(node, key) {
    if (node !== undefined) {
      if (key === node.key) {
        return node.value
      }

      // recurse to the left
      if (key < node.key) {
        return this._search(node.left, key)
      }

      // recurse to the right
      if (key > node.key) {
        return this._search(node.right, key)
      }
    }
  }

  inorder(node) {
    if (node !== undefined) {
      this.inorder(node.left)
      console.log(`${node.key} => ${node.value}`)
      this.inorder(node.right)
    }
  }

  preorder(node) {
    if (node !== undefined) {
      console.log(`${node.key} => ${node.value}`)
      this.preorder(node.left)
      this.preorder(node.right)
    }
  }
}

module.exports = BinarySearchTree
