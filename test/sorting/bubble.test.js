import test from 'ava'
import { sorting } from '../../src/algorithms/'

test('sort numbers', t => {
  const items = [9, 7, 5, 3, 1]
  sorting.bubble(items)
  t.deepEqual(items, [1, 3, 5, 7, 9])
})
