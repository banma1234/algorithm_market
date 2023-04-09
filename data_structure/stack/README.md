## Stack

데이터를 집어넣을 수 있는 선형(linear) 자료형으로 `선입후출`의 구조를 가진다. `ctrl+Z`와 같이 이전 작업을 취소하는 기능이 요구될 때 사용된다.
구현해야 할 기능은 다음과 같다.

- `push(item)` : stack에 `item`을 `삽입`한다.
- `pop()` : stack의 `꼭대기`에 위치한 원소를 `제거`한다. 즉 가장 `마지막으로 push한 원소`가 제거된다.
- `peek()` : stack의 `꼭대기`에 위치한 원소의 값을 `출력`한다.
- `clear()` : stack을 초기화한다.
- `length()` : stack의 크기를 출력한다.

js에서는 `배열`을 이용하여 간단히 구현 가능하다.

---

```javascript
let store = [];
let top = 0;    // stack의 index값을 대표하는 변수
```

- push(item) : store.push(item)
- pop() : store.pop()
- peek() : return store[top - 1]
- clear() : store.splice(0);
- length() : return top