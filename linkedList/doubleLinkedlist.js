class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    addNode(value) {
      const node = new Node(value);
      if (!this.head) {
        this.head = node;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
      }
      this.tail = node;
    }
  
    addFirst(value) {
      const node = new Node(value);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
    }
  
    addLast(value) {
      const node = new Node(value);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
    }
  
    deleteFirst() {
      if (!this.head) {
        return null;
      } else {
        this.head = this.head.next;
        if (this.head) {
          this.head.prev = null;
        } else {
          this.tail = null;
        }
      }
    }
  
    deleteLast() {
      if (!this.tail) {
        return null;
      } else {
        this.tail = this.tail.prev;
        if (this.tail) {
          this.tail.next = null;
        } else {
          this.head = null;
        }
      }
    }
  
    print() {
      if (!this.head) {
        console.log("empty");
      } else {
        let temp = this.head;
        while (temp) {
          console.log(temp.value);
          temp = temp.next;
        }
      }
    }
  }
  
  const list = new DoublyLinkedList();
  list.addFirst(10);
  list.addNode(20);
  list.addLast(30);
  list.deleteFirst();
  list.deleteLast();
  list.print();