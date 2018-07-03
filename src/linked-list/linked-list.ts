import { Comparator } from '../utils/comparator/comparator'
import LinkedListNode from './linked-list-node'

export class LinkedList {
  /** The fist last element inserted on the list */
  head: LinkedListNode | null
  /** The fist element inserted on the list */
  tail: LinkedListNode | null

  /** Comparator function */
  private compare: Comparator

  constructor(comparatorFunction?: (a:any, b:any) => number ) {
    this.head = null
    this.tail = null

    this.compare = new Comparator(comparatorFunction)
  }

  /**
   * Adds the element at the end of the linked list
   * @param value The element to be added
   */
  append(value: any): LinkedList {
    const newNode  = new LinkedListNode(value)

    if(!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }

    if (!!this.tail) {
      this.tail.next = newNode
      this.tail = newNode
    }
    return this
  }

  /**
   * Adds a element at the begining of the list
   * @param value The element to be inserted
   */
  prepand(value: any): LinkedList {
    const newNode  = new LinkedListNode(value, this.head)
    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }

    return this
  }

  /**
   * Adds a element before a specific item
   * @param element The element to be inserted
   * @param previousItem The elemet that will be used as reference for inserting the new item.
   */
  insert(element: any, previousItem: LinkedListNode): void {
    const newItem = new LinkedListNode(element)
    if (!this.head) {
      throw new Error('List not initialized')
    }
    let currentItem: LinkedListNode = this.head

    if(!currentItem) {
      this.head = currentItem
    } else {

      while(true) {
        if (currentItem === previousItem) {
          const tempNextItem = previousItem.next
          currentItem.next = newItem
          newItem.next = tempNextItem
          break
        } else {
          currentItem = currentItem.next as LinkedListNode
        }
      }
    }
  }

  /**
   * Removes a element from list
   * @param value Element to be removed from list
   */
  delete(value: any): LinkedListNode | null {
    if (!this.head) {
      return null
    }

    let deletedNode = null

    while(this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head
      this.head = this.head.next
    }

    let currentNode = this.head

    if (currentNode !== null) {
      while(!!currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next
          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next
        }
      }
    }

    if (this.tail && this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode
    }

    return deletedNode
  }

  /**
   * Find a value inside a Linked List
   * @param valueOrCallback A value or Callback Function
   */
  find<T>(valueOrCallback: T): LinkedListNode | null {
    if (!this.head) {
      return null
    }

    let callback = null
    let value = null

    if (valueOrCallback instanceof Function) {
      callback = valueOrCallback
    } else {
      value = valueOrCallback
    }

    let currentNode = this.head
    while (!!currentNode) {

      if (!!callback && !!callback(currentNode.value)) {
        return currentNode
      }

      if (!!value && this.compare.equal(currentNode!.value, value)) {
        return currentNode
      }

      /* Stop Loop When no nodes are found */
      if (!!currentNode.next) {
        currentNode = currentNode.next
      } else {
        break
      }
    }

    return null
  }

  /**
   * Delets the fist element inserted on the Linked List
   */
  deleteHead(): LinkedListNode|null {
    if (!this.head) {
      return null
    }

    const deletedHead = this.head

    if (this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
      this.tail = null
    }

    return deletedHead
  }

  /**
   * Deletes the last element inserted in the Linked List
   */
  deleteTail(): LinkedListNode|null {
    const deletedTail = this.tail

    if (this.head === this.tail) {
      this.head = null
      this.tail = null

      return deletedTail
    }

    let currentNode = this.head

    while(!!currentNode!.next) {
      if (!currentNode!.next!.next) {
        currentNode!.next = null
      } else {
        currentNode = currentNode!.next
      }
    }

    this.tail = currentNode
    return deletedTail

  }

  /**
   * Converts a linked list to array
   */
  toArray(): any[] {
      const arr: any[] = []

      if (!this.head) {
        return []
      }

      let currentItem = this.head

      while(true) {
        arr.push(currentItem.value)

        if (!!currentItem.next) {
          currentItem = currentItem.next
        } else {
          break
        }
      }

      return arr
  }

  /**
   * Transforms the Linked List into a string
   * @param callback A callback function to transform the string value
   */
  toString(callback?: (a:any) => any): string {
    return this.toArray().map(i => i.toString(callback)).toString()
  }

  /**
   * Initializes a list
   * @param element Element to initialize the list
   */
  private initializeList(element: any): void {
    if (!!element) {
      this.head = new LinkedListNode(element)
    }
  }

}

export default LinkedList
