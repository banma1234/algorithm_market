## Queue

데이터를 집어넣을 수 있는 선형(linear) 자료형으로 `선입선출`의 구조를 가진다. `대용량 파일 로딩`과 같은 기능이 요구될 때 사용된다.
구현해야 할 기능은 다음과 같다.

- `enqueue(item)` : queue에 `item`을 `삽입`한다.
- `dequeue()` : queue에서 `가장 먼저 삽입된 원소`를 제거한다.
- `peek()` : queue에 가장 먼저 삽입된 원소를 출력한다.
- `clear()` : queue를 초기화한다.
- `length()` : queue의 크기를 출력한다.


js에서는 `배열`을 이용하여 간단히 구현 가능하다.

---

```javascript
let store = [];
```

- enqueue(item) : store.push(item)
- dequeue() : store.shift()
- peek() : return store[0]
- clear() : store.splice(0);
- length() : return store.length