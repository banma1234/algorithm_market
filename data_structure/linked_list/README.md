## Linked_list

리스트의 일종으로 각 `노드`와 `데이터`가 `포인터`를 가지고 한 줄로 이어져있는 형태를 띄는 자료구조이다. `선형`, `원형`, `이중` 연결 리스트로 분류되며 본 문서는 `선형` 연결 리스트를 다룬다. 연결 리스트는 늘어선 노드의 중간지점에서도 자료의 추가와 삭제가 `O(1)`의 시간에 가능하기에 널리 사용되는 자료구조이다. 구현해야할 기능은 다음과 같다.

- `append(data)` : linked_list의 마지막에 `data`를 `삽입`하고 이전 레벨의 노드와 `연결`한다.
- `insert(data, index)` : linked_list의 `index`의 위치에 `data`를 `삽입`하고 전후 레벨의 노드들과 `연결`한다.
- `delete(index)` : linked_list의 `index`에 위치한 노드를 `제거`하고 전후 레벨의 노드들과 `연결`한다.
- `print()` : linked_list의 내용을 출력한다.
- `search(data)` : linked_list에서 `data`에 해당하는 값을 찾아 해당 노드의 `index`값을 출력한다.
- `clear()` : linked_list를 초기화한다.
- `length()` : linked_list의 크기를 출력한다.

js에서는 `Node`와 `LinkedList`를 따로 구현하여 구현한다.

`Node`에서는 해당 노드에 저장할 데이터 `data`와 다음 노드를 가르키는 포인터 `next`를 할당한다.
`LinkedList`에서는 노드를 관리할 로직을 구현한다.

---

```javascript
class Node {
  constructor(data) {
    this.data = data;   // 저장할 데이터
    this.next = undefined;  // 다음 노드를 가르키는 포인터
  }
}

class LinkedList {
    ...
}
```

---

### 소스코드

내용이 많은 관계로 **`linked_list.js`**를 참고 부탁드립니다.
