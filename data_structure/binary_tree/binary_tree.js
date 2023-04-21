class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BTree {
  constructor(data) {
    let init = new Node(data);
    this.root = init;
    this.length = 1;
  }

  length() {
    return this.length;
  }

  insert(data) {
    let newNode = new Node(data);
    let pointer = this.root;

    while (pointer) {
      if (data === pointer.data) {
        break;
      }
      if (data < pointer.data) {
        if (!pointer.left) {
          pointer.left = newNode;
          this.length++;
          break;
        }
        pointer = pointer.left;
      }
      if (data > pointer.data) {
        if (!pointer.right) {
          pointer.right = newNode;
          this.length++;
          break;
        }
        pointer = pointer.right;
      }
    }
  }

  DFS() {
    const stack = [];
    const result = [];

    let pointer = this.root;
    let current = pointer;
    while (result.length != this.length) {
      if (current.right) {
        stack.push(current.right);
      }
      if (current.left) {
        stack.push(current.left);
      }
      result.push(current.data);
      current = stack.pop();
    }

    return result;
  }

  BFS() {
    const queue = [];
    const result = [];

    let pointer = this.root;
    let current = pointer;
    while (result.length != this.length) {
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      result.push(current.data);
      current = queue.shift();
    }

    return result;
  }
}
