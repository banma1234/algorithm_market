## Deque

![deque](https://user-images.githubusercontent.com/77619465/230761273-e1ea6c73-b346-4b67-bbfb-4ecc09ab05c3.jpg)

`Stack`과 `Queue`를 합친 자료구조로 `양방향`에서 데이터의 입출력이 가능한 자료형이다. 실제 메모리에서 앞, 뒤를 구분하지는 않지만 편의상 deque의 앞, 뒤 모두 자료의 입출력이 가능하다고 표현한다. 구현해야할 기능은 다음과 같다.

- `push_head(item)` : deque의 `head`에 `item`을 `삽입`한다.
- `push_tail(item)` : deque의 `tail`에 `item`을 `삽입`한다.
- `pop_head()` : `head`의 원소를 `제거`한다.
- `pop_tail()` : `tail`의 원소를 `제거`한다.
- `print_head()` : `head`의 원소를 `출력`한다.
- `print_tail()` : `tail`의 원소를 `출력`한다.
- `rotate_left(n)` : deque을 `반시계`방향으로 `n`회 회전한다.
- `rotate_right(n)` : deque을 `시계`방향으로 `n`회 회전한다.
- `isEmpty()` : deque이 비어있는지 조사한다.
- `clear()` : deque을 초기화한다.
- `length()` : deque의 크기를 출력한다.

js에서는 `배열`을 이용하여 간단히 구현 가능하다.

---

### 소스코드

```javascript
const Deque = () => {
    let store = [];
    
    return {
        // push
        push_head(item) {
            store = [item, ...store];
        },
        push_tail(item) {
            store.push(item);
        },
        // pop
        pop_head() {
            store.shift();
        },
        pop_tail() {
            store.pop();
        },
        // print
        print_head() {
            return store[0];
        },
        print_tail() {
            return store[store.length - 1];
        },
        // rotate
        rotate_left(n) {
            if (!this.isEmpty()) {
                let temp = null;
                for (let i=0; i<n; i++) {
                    temp = store[0];
                    store.shift();
                    store.push(temp);
                }
            } else {
                console.log("deque is Empty");
            }
        },
        rotate_right(n) {
            if (!this.isEmpty()) {
                let temp = null;
                for (let i=0; i<n; i++) {
                    temp = store[store.length - 1];
                    store.pop();
                    store = [temp, ...store]
                }
            } else {
                console.log("deque is Empty");
            }
        },
        // else
        isEmpty() {
            return store.length === 0 ? true : false;
        },
        clear() {
            store.splice(0);
        },
        length() {
            return store.length;
        }
    };
};
```