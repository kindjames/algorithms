import test from 'ava'
import { Trie } from '../../src/structures'

test(`exists() returns true when an item was added`, t => {
  let tree = new Trie()
  tree.add('foo')
  tree.add('bar')

  t.true(tree.exists('foo'))
  t.true(tree.exists('bar'))
})

test(`exists() returns false for a subset of them item`, t => {
  let tree = new Trie()
  tree.add('foo')
  tree.add('bar')

  t.false(tree.exists('fo'))
  t.false(tree.exists('barr'))
})
