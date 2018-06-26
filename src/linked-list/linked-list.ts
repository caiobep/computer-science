import LinkedListNode from './linked-list-node'

export class LinkedList {
  private head: LinkedListNode | null

  constructor(item?: LinkedListNode) {
    this.head = (!!item) ? new LinkedListNode(item) : null
  }

  /**
   * Adds the element at the end of the linked list
   * @param element The element to be added
   */
  append(element: any): void {
    if (!!this.head) {
      let currentItem = this.head
      const newItem = new LinkedListNode(element)

      if (!currentItem) {
        this.head = newItem
      } else {

        /* Find the last item and insert a new element after It */
        while(true) {
          if (currentItem.next) {
            currentItem = currentItem.next
          } else {
            currentItem.next = newItem
            break
          }
        }
      }
    } else {
      this.initializeList(element)
    }
  }

  /**
   * Adds a element at the begining of the list
   * @param element The element to be inserted
   */
  prepand(element: any): void {
    const newItem = new LinkedListNode(element)
    const oldHead = this.head

    this.head = newItem
    newItem.next = oldHead
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
   * @param element Element to be removed from list
   */
  delete(element: any): void {
    let currentItem = this.head

    if (!currentItem) {
        return
    }

    if (currentItem.value === element) {
        this.head = currentItem.next as LinkedListNode
    } else {
        let previousElement: LinkedListNode | null = null

        while (true) {
            if (currentItem.value === element) {
                if (!!previousElement) {
                  previousElement.next = currentItem.next || null
                }
                break
            } else {
              if (!!currentItem && !!currentItem.next) {
                  previousElement = currentItem
                  currentItem = currentItem.next
                }
            }
        }
    }
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
