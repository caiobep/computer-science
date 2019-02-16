import { LinkedList } from '../linked-list/linked-list'


export class Stack {
  constructor(
    public linkedList = new LinkedList()
  ) {}

  /**
   * Insert a item into the Stack
   */
  push<T>(item: T): Stack {
    this.linkedList.prepand(item)
    return this
  }

  /**
   * Get the fist value on the Stack
   */
  pop<T>(): T | any {
    if (!!this.linkedList.head) {
      const deletedHead = this.linkedList.deleteHead()
      return deletedHead!.value
    }
    return null
  }

  /**
   * Returns the first element of the stack without removing it
   */
  peek<T>(): T | any | null {
  return (!!this.linkedList.head)
      ? this.linkedList.head.value as T | any
      : null
  }

  /**
   * Returns wheather the stack is empty or not
   */
  isEmpty(): boolean {
    return (!this.linkedList.head)
  }

  /**
   * Transforms the Stack into a Array
   */
  toArray(): any[] {
    return this.linkedList.toArray()
  }

  /**
   * Transforms the Stack into a String
   * @param mapFunction optional Map Function
   */
  toString(mapFunction?: (a:any) => string): string {
    if (!!mapFunction) {
      return this.toArray().map(mapFunction).toString()
    }

    return this.toArray().toString()
  }
}

export default Stack
