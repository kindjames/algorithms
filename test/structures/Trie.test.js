import test from 'ava'
import { Trie } from '../../src/structures'

test(`exists() returns true when an item was added`, t => {
  let trie = new Trie()
  t.is(trie.addWord('catch'), true, 'new word 1');
  t.is(trie.addWord('cakes'), true, 'new word 2');
  t.is(trie.addWord('cake'), true, 'prefix of existing word');
  t.is(trie.addWord('cake'), false, 'word already present');
  t.is(trie.addWord('caked'), true, 'new word 3');
  t.is(trie.addWord('catch'), false, 'all words still present');
  t.is(trie.addWord(''), true, 'empty word');
  t.is(trie.addWord(''), false, 'empty word present');
})

test(`exists() returns false for a subset of them item`, t => {
  let tree = new Trie()
  tree.addWord('foo')
  tree.addWord('bar')

  t.false(tree.wordExists('fo'))
  t.false(tree.wordExists('barr'))
})
