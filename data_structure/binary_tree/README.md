## Binary_tree

트리의 일종으로 한 부모의 `자식` 노드가 `2개`를 초과하지 않는 구조의 트리를 뜻한다. 이때 이진트리는 할당 가능한 자식 노드의 개수에 따라 다시 분류된다.

- **완전 이진트리** : 마지막 레벨을 제외한 모든 노드가 가득 차 있어야 하고, 마지막 레벨의 노드는 전부 차 있지 않아도 되지만 왼쪽이 채워져 있는 경우
- **정 이진트리** : 각 노드가 0 개 혹은 2 개의 자식 노드를 갖는 경우
- **포화 이진트리** : 정 이진 트리이면서 완전 이진 트리인 경우. 모든 리프 노드의 레벨이 동일하고, 모든 레벨이 가득 채워져 있어야 됨.
  여기서 `레벨`이란 트리의 같은 `깊이`를 가진 노드들의 집합이다. 보다 자세한 트리용어는 `트리 문서`에서 다루도록 한다.

이진트리의 특징으로는 맨 꼭대기의 `루트(root)`를 기준으로 보다 작은 값은 `왼쪽`에, 큰 값은 `오른쪽`에 위치하게된다. 이는 여타 자식노드들에게도 적용된다. 단 데이터의 삽입 순서에 따라 틀려지기도 하는데 이러한 특징을 완벽하게 갖춘 이진트리를 `이진 검색 트리`라고 한다.

일반적인 이진트리를 구현하기 위해선 다음과 같은 기능이 요구된다.

- `insert(data)` : `data`를 이진트리에 삽입한다.
- `length()` : 이진트리의 크기를 출력한다.

또한 이진트리를 이용하여 `DFS`, `BFS`를 구현할 수 있기 때문에 해당 기능 또한 구현한다.

- `DFS()` : 깊이우선탐색을 진행한다.
- `BFS()` : 너비우선탐색을 진행한다.

js에서는 `LinkedList`를 이용하여 구현할 수 있다.

---

### 소스코드

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// 일반적인 이진트리의 코드
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
}
```

```javascript
// DFS, BFS
class BTree {
  ...

  DFS() {
    const stack = [];   // 스택을 이용해 구현
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
    const queue = [];   // 큐를 이용해 구현
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
```
