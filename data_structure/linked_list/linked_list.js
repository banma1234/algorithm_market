class Node {
  constructor(data) {
    this.data = data;
    this.next = undefined;
  }
}

class LinkedList {
  constructor() {
    const init = new Node("HEAD");
    this.head = init;
    this.tail = init;
    this.length = 0;
    this.pointer = undefined;
  }

  length() {
    return this.length;
  }

  append(data) {
    const newNode = new Node(data);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  print() {
    let result = "";
    let pointer = this.head.next;
    for (let i = 0; i < this.length; i++) {
      result += pointer.data + " ";
      pointer = pointer.next;
    }
    result = result.split(" ");
    result.pop();

    return result;
  }

  insert(data, index) {
    const newNode = new Node(data);
    let pointer = this.head;
    for (let i = 0; i < index - 1; i++) {
      pointer = pointer.next;
    }
    newNode.next = pointer.next;
    pointer.next = newNode;
    this.length++;
  }

  delete(index) {
    let pointer = this.head;
    for (let i = 0; i < index - 1; i++) {
      pointer = pointer.next;
    }
    pointer.next = pointer.next.next;
    this.length--;
  }

  search(data) {
    let pointer = this.head;
    for (let i = 0; i < this.length + 1; i++) {
      if (pointer.data === data) {
        return i;
      }
      pointer = pointer.next;
    }
    return undefined;
  }

  clear() {
    const init = new Node("HEAD");
    this.head = init;
    this.tail = init;
    this.length = 0;
  }
}

/* 사용법
const l = new LinkedList();

l.append(1);
l.append(2);
l.insert(1.5, 2);
l.delete(2);
console.log(l.print());
...
*/
