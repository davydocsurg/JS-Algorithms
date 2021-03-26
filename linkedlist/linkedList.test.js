// import linkedList
const LinkedList = require("./linkedList");

// test the insertAtHead()
describe("#insertAtHead", () => {
  test("should add the element to the beginning of the list", () => {
    // create a new linkedList
    const ll = new LinkedList();
    ll.insertAtHead(10);
    // reference the initial head value
    const oldHead = ll.head;
    ll.insertAtHead(20);

    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  });
});

// get elements by their index()
describe("#getByIndex", () => {
  describe("with index less than 0", () => {
    test("should return null", () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(-1)).toBeNull();
    });
  });

  describe("with index greater than list length", () => {
    test("should return null", () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(5)).toBeNull();
    });
  });

  describe("with index = 0", () => {
    test("should return the head", () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(0).value).toBe(10);
    });
  });

  describe("with index in the middle", () => {
    test("should return the element at that index", () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);

      expect(ll.getByIndex(2).value).toBe(30);
    });
  });
});

// insert elements at a particular index
describe("#insertAtIndex", () => {
  describe("with index less than 0", () => {
    test("should not insert anything", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(-1, 30);

      expect(ll.length).toBe(2);
    });
  });

  describe("with index greater than list length", () => {
    test("should not insert anything", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(5, 30);

      expect(ll.length).toBe(2);
    });
  });

  describe("with index = 0", () => {
    test("should insert at the head", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(0, 30);

      expect(ll.head.value).toBe(30);
      expect(ll.head.next.value).toBe(10);
      expect(ll.length).toBe(3);
    });
  });

  describe("with index in the middle", () => {
    test("should insert at the given index", () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);
      ll.insertAtIndex(2, 50);
      const node = ll.getByIndex(2);

      expect(node.value).toBe(50);
      expect(node.next.value).toBe(30);
      expect(ll.length).toBe(5);
    });
  });
});

// remove elements from head
describe("#removeHead", () => {
  test("should remove the head", () => {
    const ll = LinkedList.fromValues(10, 20, 30);
    ll.removeHead();

    expect(ll.head.value).toBe(20);
    expect(ll.length).toBe(2);
  });
});

// remove at index
describe("#removeAtIndex", () => {
  describe("with index less than 0", () => {
    test("should not remove anything", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.removeAtIndex(-1);

      expect(ll.length).toBe(2);
    });
  });

  describe("with index greater than list length", () => {
    test("should not remove anything", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.removeAtIndex(-1);

      expect(ll.length).toBe(2);
    });
  });

  describe("with index = 0", () => {
    test("should remove at the head", () => {
      const ll = LinkedList.fromValues(10, 20, 30);
      ll.removeAtIndex(0);

      expect(ll.head.value).toBe(20);
      expect(ll.head.next.value).toBe(30);
      expect(ll.length).toBe(2);
    });
  });

  describe("with index in the middle", () => {
    test("should remove at the given index", () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);
      ll.removeAtIndex(2);
      const node = ll.getByIndex(1);

      expect(node.value).toBe(20);
      expect(node.next.value).toBe(40);
      expect(ll.length).toBe(3);
    });
  });
});
