import { expect } from 'chai'
import 'mocha'

import LinkedList from '../linked-list'
import LinkedListNode from '../linked-list-node'

describe('Linked List', () => {

  it('Create a empty Linked List', () => {
    const linkedList = new LinkedList()

    expect(linkedList.toArray()).to.eql([])
  })

  it('Should append node to linked list', () => {
    const linkedList = new LinkedList()
    const expectedArray = ['fist element', 'secound element']

    linkedList.append(expectedArray[0])
    linkedList.append(expectedArray[1])

    expect(linkedList.toArray()).to.eql(expectedArray)
  })

  it('Should delete node from the linked list', () => {
    const linkedList = new LinkedList()
    const expectedArray = [1, 2, 3]
    const elementToBeRemoved = expectedArray[1]

    linkedList.append(expectedArray[0])
    linkedList.append(expectedArray[1])
    linkedList.append(expectedArray[2])

    const removedNode = linkedList.delete(elementToBeRemoved)
    const linkedListAsArray = linkedList.toArray()

    expect(2).to.eql(elementToBeRemoved)
    expect(linkedListAsArray).to.eql([1,3])
  })

  it('Should prepand node to the linked list', () => {
    const linkedList = new LinkedList()
    const expectedArray = [1, 2, 3]

    linkedList.append(expectedArray[0])
    linkedList.append(expectedArray[1])
    linkedList.prepand(expectedArray[2])

    const linkedListAsArray = linkedList.toArray()

    expect(linkedListAsArray[0]).to.eql(3)
    expect(linkedListAsArray[2]).to.eql(2)
  })

})
