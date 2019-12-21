import test from 'ava'
import { SinglyLinkedList } from '../../src/structures'

/** length */
test('length for no items', t => {
  let list = new SinglyLinkedList()
  t.is(list.length, 0)
})

test('length for single item', t => {
  let list = new SinglyLinkedList()

  list.add("foo1")

  t.is(list.length, 1)
})

test('length for three items', t => {
  let list = new SinglyLinkedList()

  list.add("foo1")
  list.add("foo2")
  list.add("foo3")

  t.is(list.length, 3)
  t.deepEqual(list.toArray(), ["foo1", "foo2", "foo3"])
})

/** insertAt() */
test('insertAt 0 with no items', t => {
  let list = new SinglyLinkedList()

  list.insertAt(0, "foo1")

  t.is(list.length, 1)
  t.deepEqual(list.toArray(), ["foo1"])
})

test('insertAt 0 with one item', t => {
  let list = new SinglyLinkedList()

  list.add("foo1")
  list.insertAt(0, "foo2")

  t.is(list.length, 2)
  t.deepEqual(list.toArray(), ["foo2", "foo1"])
})

test(`insertAt 1 with one item throws 'index out of bounds'`, t => {
  let list = new SinglyLinkedList()

  list.add("foo1")

  t.throws(() => list.insertAt(1, "foo2"), "index out of bounds")
})

test('insertAt 1 with three items', t => {
  let list = new SinglyLinkedList()

  list.add("foo1")
  list.add("foo2")
  list.add("foo3")
  list.insertAt(1, "foo4")

  t.is(list.length, 4)
  t.deepEqual(list.toArray(), ["foo1", "foo4", "foo2", "foo3"])
})

/** reverse() */
test('reverse with no items', t => {
  let list = new SinglyLinkedList()

  list.reverse()

  t.deepEqual(list.toArray(), [])
})

test('reverse with one item', t => {
  let list = new SinglyLinkedList()

  list.add("foo1")
  list.reverse()

  t.deepEqual(list.toArray(), ["foo1"])
})

test('reverse with three items', t => {
  let list = new SinglyLinkedList()

  list.add("foo1")
  list.add("foo2")
  list.add("foo3")
  list.reverse()

  t.deepEqual(list.toArray(), ["foo3", "foo2", "foo1"])
})

/** removeAt() */
test('removeAt 0 with no items', t => {
  let list = new SinglyLinkedList()

  t.throws(() => list.removeAt(0), "index out of bounds")
})

test('removeAt 0 with one item', t => {
  let list = new SinglyLinkedList()

  list.add("foo1")
  list.removeAt(0)

  t.deepEqual(list.toArray(), [])
})

test('removeAt 0 with three items', t => {
  let list = new SinglyLinkedList()

  list.add("foo1")
  list.add("foo2")
  list.add("foo3")
  list.removeAt(0)

  t.deepEqual(list.toArray(), ["foo2", "foo3"])
})

test('removeAt 1 with three items', t => {
  let list = new SinglyLinkedList()

  list.add("foo1")
  list.add("foo2")
  list.add("foo3")
  list.removeAt(1)

  t.deepEqual(list.toArray(), ["foo1", "foo3"])
})

test(`removeAt 2 with one item throws 'index out of bounds'`, t => {
  let list = new SinglyLinkedList()

  list.add("foo1")
  t.throws(() => list.removeAt(2), "index out of bounds")
})
