import test from 'ava'
import { Trie } from '../../src/structures'

test('it returns the correct item from the list', t => {
  let tree = new Trie()
  tree.add('name')
  tree.add('hello')
  tree.add('kind')
  tree.add('james')
  tree.add('is')
  tree.add('my')
  tree.add('there')

  const result = tree.get(3)

  t.is(result, 'my')
})
