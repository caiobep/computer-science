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

    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)

    expect(linkedList.head!.value).to.eql(1)
    expect(linkedList.tail!.value).to.eql(3)

    const deletedNode1 = linkedList.delete(3)
    expect(deletedNode1!.value).to.eql(3)
    expect(linkedList.toArray()).to.eql([1,2])
    expect(linkedList.head!.value).to.eql(1)
    expect(linkedList.tail!.value).to.eql(2)

    const deletedNode2 = linkedList.delete(2)
    expect(deletedNode2!.value).to.eql(2)
    expect(linkedList.toArray()).to.eql([1])
    expect(linkedList.head!.value).to.eql(1)
    expect(linkedList.tail!.value).to.eql(1)

    const deletedNode3 = linkedList.delete(1)
    expect(deletedNode3!.value).to.eql(1)
    expect(linkedList.toArray()).to.eql([])
    expect(linkedList.head).to.eql(null)
    expect(linkedList.tail).to.eql(null)
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

  it('Should delete linked list head', () => {
    const linkedList = new LinkedList()

    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)

    const deletedTail = linkedList.deleteHead()
    expect(deletedTail!.value).to.eql(1)
    expect(linkedList.toArray()).to.eql([2,3])
  })

  it('Should delete linked list tail', () => {
    const linkedList = new LinkedList()

    linkedList.append(1)
    linkedList.append(2)
    linkedList.append(3)

    const deletedTail = linkedList.deleteTail()
    expect(deletedTail!.value).to.eql(3)
    expect(linkedList.toArray()).to.eql([1,2])

    const deletedTail2 = linkedList.deleteTail()
    expect(deletedTail2!.value).to.eql(2)
    expect(linkedList.toArray()).to.eql([1])

    const deletedTail3 = linkedList.deleteTail()
    expect(deletedTail3!.value).to.eql(1)
    expect(linkedList.toArray()).to.eql([])
  })

  it('Should find a node by value', () => {
    const linkedList = new LinkedList()

    expect(linkedList.find(5)).to.eql(null)

    linkedList.append(1)

    expect(linkedList.find(1)).to.not.eql(undefined)

    linkedList
      .append(2)
      .append(3)

    const node = linkedList.find(2)
    expect(node!.value).to.eql(2)
    expect(linkedList.find(5)).to.eql(null)
  })

  it('Should find a node by callback', () => {
    const linkedList = new LinkedList()

    linkedList
      .append({value: 1, key: 'test1'})
      .append({value: 2, key: 'test2'})
      .append({value: 3, key: 'test3'})

    const node = linkedList.find<(a: any) => any>(
      value => value.key === 'test2'
    )

    expect(node).to.not.eql(undefined)
    expect(node!.value!.value).to.eql(2)
    expect(node!.value!.key).to.eql('test2')
    expect(linkedList.find<(a: any) => any>(
      value => value.key === 'test5'
    )).to.eql(null)
  })

})
