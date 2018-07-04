import {expect} from 'chai'
import 'mocha'

import Stack from '../stack'

describe('Stack', () => {

  it('Should create a empty stack', () => {
    const stack = new Stack()

    expect(stack.toArray()).be.eql([])
  })

  it('Should be able to stack a value', () => {
    const stack = new Stack()

    stack.push(1)

    expect(stack.toArray()).be.eql([1])
  })

  it('Should be able to peek data from Stack', () => {
    const stack = new Stack()

    expect(stack.peek()).to.be.eql(null)

    stack
      .push(1)
      .push(2)

    expect(stack.peek()).to.be.eql(2)
    expect(stack.peek()).to.be.eql(2)
  })

  it('Should implement the LIFO pattern', () => {
    const stack = new Stack()

    stack
      .push(1)
      .push(2)
      .push(3)
      .push(4)

    expect(stack.pop()).be.eql(4)
    expect(stack.pop()).be.eql(3)
    expect(stack.pop()).be.eql(2)
    expect(stack.pop()).be.eql(1)
    expect(stack.isEmpty()).to.be.eql(true)
  })

  it('Should be possible to push/pop elements', () => {
    const stack = new Stack()

    stack
      .push({ value: 'test1', key: 'key1'})
      .push({ value: 'test2', key: 'key2'})

    const stringifyer = (value: any) => `${value.value}:${value.key}`

    expect(stack.toString(stringifyer)).to.be.eql('test2:key2,test1:key1')
    expect(stack.pop().value).to.be.eql('test2')
    expect(stack.pop().value).to.be.eql('test1')
  })

  it('Should be possible to convert a stack to array', () => {
    const stack = new Stack()

    expect(stack.peek()).to.be.eql(null)

    stack
      .push(1)
      .push(2)
      .push(3)

    expect(stack.toArray()).to.be.eql([3,2,1])
  })

})
