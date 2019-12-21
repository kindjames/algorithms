import test from 'ava'
import { BinarySearchTree } from '../../src/structures'

test('it returns the correct item from the list', t => {
  let tree = new BinarySearchTree()
  tree.set(4, 'name')
  tree.set(1, 'hello')
  tree.set(7, 'kind')
  tree.set(6, 'james')
  tree.set(5, 'is')
  tree.set(3, 'my')
  tree.set(2, 'there')

  const result = tree.get(3)

  t.is(result, 'my')
})
