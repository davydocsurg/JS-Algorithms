// import LinkedList from "./linkedList";
const LinkedList = require("./linkedList");

// const ll = new LinkedList();
// ll.insertAtHead(10);
// ll.insertAtHead(20);

const ll = new LinkedList.fromValues(10, 20, 30, 40, 50);

ll.print();
ll.insertAtIndex(2, 70);
ll.print();
ll.removeAtIndex(2);
ll.print();
// console.log(ll.getByIndex(0).value);
