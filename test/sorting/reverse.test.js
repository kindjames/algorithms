import test from 'ava'
import { sorting } from '../../src/algorithms'

test('reverse array of characters', t => {
  const input = ['A', 'B', 'C', 'D', 'E']
  sorting.reverse(input)
  t.deepEqual(input, ['E', 'D', 'C', 'B', 'A'])
})
