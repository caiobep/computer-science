import LinkedList from '../linked-list/linked-list'
import { LinkedListNode } from '../linked-list/linked-list-node'

export class Queue {
  constructor(
    public linkedList = new LinkedList()
  ) {}

  /**
   * Checks weather the Queue is empty or not
   */
  isEmpty(): boolean {
    return !this.linkedList.tail
  }

  /**
   * Returns the fist element on the Queue
   */
  peek(): LinkedListNode | null {
    if (!this.linkedList.head) {
      return null
    }
    return this.linkedList.head.value
  }

  /**
   * Inserts a element in the Queue
   * @param value Data to be queued
   */
  enqueue(value: any): void {
    this.linkedList.append(value)
  }

  /**
   * Removes a element from the queue
   */
  dequeue(): any | null {
    const removedHead = this.linkedList.deleteHead()
    return removedHead ? removedHead.value : null
  }


  /**
   * Transforms a Queue into an Array
   * @param callback A callback function to transform the string value
   */
  toArray(): any[] {
    return this.linkedList.toArray()
  }

  /**
   *  Transforms the Queue into a String
   * @param callback A callback function to transform quque into a string
   */
  toString(callback?: (a: any) => any): string {
    if (callback instanceof Function) {
      return this.toArray().map(callback).toString()
    }

    return this.toArray().toString()
  }
}

export default Queue
