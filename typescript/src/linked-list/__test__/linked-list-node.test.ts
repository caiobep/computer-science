import { expect } from 'chai'
import 'mocha'

import LinkedListNode from '../linked-list-node'

describe('Linked List Node', () => {

  it('Should create a list node with value', () => {
    const node = new LinkedListNode(1)

    expect(node.value).to.equal(1)
    expect(node.next).to.equal(null)
  })

  it('Should create a list node with object as value', () => {
    const nodeValue = { value: 1, key: 'test' }
    const node =  new LinkedListNode(nodeValue)

    expect(node.value).to.equal(nodeValue)
    expect(node.next).to.equal(null)
  })

  it('Should Link nodes together', () => {
    const node2 = new LinkedListNode(2)
    const node1 = new LinkedListNode(1, node2)

    expect(node1.next).to.equal(node2)
    expect(node2.next).to.equal(null)
    expect(node1.value).to.equal(1)
    expect(node2.value).to.equal(2)
  })
})
