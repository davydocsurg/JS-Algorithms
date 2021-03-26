class LinkedList {
  constructor() {
    // beginning of linkedlist
    this.head = null;
    // easy access of linkedlist
    this.length = 0;
  }

  // insert elements at the beginning
  insertAtHead(data) {
    // create new node with value(data) which references the initial element of the list
    const newNode = new LinkedListNode(data, this.head);
    // replace the beginning of the list with the newNode
    this.head = newNode;
    // increase the list length
    this.length++;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  removeHead() {
    this.head = this.head.next;
    this.length--;
  }

  insertAtIndex(index, value) {
    if (index === 0) {
      return this.insertAtHead(value);
    }

    /**
     1. find the element directly before the current index
     *
     2. set the next value of the element(directly before the index) to the new element to be inserted
     *
     3. take the new value that's currently at the index(particular index to insert a new element) and set it as the next value for the element to be inserted.
     */
    // 1.
    const prev = this.getByIndex(index - 1);
    if (prev == null) {
      return null;
    }

    // 2.
    prev.next = new LinkedListNode(
      value,
      prev.next /**next value => current value */
    );
    // 3.
    this.length++;
  }

  removeAtIndex(index) {
    if (index === 0) {
      return this.removeHead();
    }

    const prev = this.getByIndex(index - 1);
    if (prev == null) {
      return null;
    }

    prev.next = prev.next.next; /**next value => current value */

    // decrease length by 1
    this.length--;
  }

  print() {
    let output = "";
    let current = this.head;
    while (current) {
      output = `${output}${current.value} -> `;
      current = current.next;
    }

    console.log(`${output}null`);
  }
}

class LinkedListNode {
  constructor(value, next) {
    // current value
    this.value = value;
    // references next linkedListNode
    this.next = next;
  }
}

LinkedList.fromValues = function (...values) {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }

  return ll;
};

module.exports = LinkedList;
