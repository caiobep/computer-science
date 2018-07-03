import { expect } from 'chai'
import 'mocha'

import Queue from '../queue'

describe('Queue', () => {
  it('Should create a empty queue', () => {
    const queue = new Queue()

    expect(queue).not.be.eql(undefined)
    expect(queue.linkedList).not.be.eql(null)
  })

  it('Should enquque data to queue', () => {
    const queue = new Queue()

    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.toArray()).to.eql([1,2])
  })

  it('Should be possible to enqueue/dequeue objects', () => {
    const queue = new Queue()

    queue.enqueue({value: 'test1', key: 'key1'})
    queue.enqueue({value: 'test2', key: 'key2'})

    const stringifier = (value: any) => `${value.key}:${value.value}`

    expect(queue.toString(stringifier)).to.eql('key1:test1,key2:test2')
    expect(queue.dequeue().value).to.eql('test1')
    expect(queue.dequeue().value).to.eql('test2')
  })

  it('Should peek data from queue', () => {
    const queue = new Queue()

    expect(queue.peek()).be.eql(null)

    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.peek()).to.eql(1)
    expect(queue.peek()).to.eql(1)
  })

  it('Should dequeue from queue in FIFO order', () => {
    const queue = new Queue()

    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.dequeue()).to.eql(1)
    expect(queue.dequeue()).to.eql(2)
    expect(queue.dequeue()).to.be.eql(null)
    expect(queue.isEmpty()).to.be.eql(true)
  })

})
