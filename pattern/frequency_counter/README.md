## frequency Counter 패턴

`frequency Counter(빈도수 측정)`는 이름 그대로 빈도수를 측정하고 비교하는 패턴이다.

---

두 문자열이 서로 애너그램인지 판별하는 solution을 작성한다고 가정해보자.

> `애너그램`이란 단어/문장을 구성하고 있는 문자의 순서를 바꾸어 전혀 다른 뜻의 단어/문장이 되는 현상을 뜻한다. 
ex.) listen & silent

<br/>

일반적인 방법으로 두 문자열 간의 단어를 교차검증 하는 solution은 다음과 같을것이다.

```javascript
// 시간 복잡도가 O(N^2)인 알고리즘
const solution = (A, B) => {
  if (A.length !== B.length) {
    return false;
  }

  for (let item of A) {
    // inclueds()는 그 자체로 시간복잡도가 O(N)이다.
    if (!B.includes(item)) {
      return false;
    }
    B = B.replace(item, "");
  }

  return true;
};

const first = "im fearless";
const second = "le sserafim";

console.log(solution(first, second)); // true
```

시간복잡도가 `O(N)`인 for문 내부에 시간복잡도가 `O(N)`인 메소드 `includes()`가 존재한다. 따라서 위 solution의 시간복잡도는 O(N**2)라고 할 수 있겠다.

<br/>

조금 더 보충하자면 `includes()` 메소드의 시간복잡도가 `O(N)`인 이유는 배열/문자열에서 특정 값이 포함되어 있는지 확인하려면 최악의 경우 0번 index에서 마지막 index까지 순회하며 검사하기 때문이다.

 즉 타겟이 되는 배열/문자열의 크기가 N인 경우 최악의 경우 총 N번 검사해야하기 때문이다.


---

이번에는 `frequency Counter` 패턴을 이용해 문제를 해결해보자.

```javascript
// 시간 복잡도가 O(N)인 알고리즘
const betterSolution = (A, B) => {
  // A와 B의 크기가 다른 경우 false
  if (A.length !== B.length) {
    return false;
  }
  let frequencyCounter = {};

  // A의 각 원소를 key, 각 원소의 개수를 value로 지정
  for (item of A) {
    frequencyCounter[item]
      ? (frequencyCounter[item] += 1)
      : (frequencyCounter[item] = 1);
  }
  for (item of B) {
    // frequencyCounter[item]이 존재하지 않거나 값이 0이라면 false
    if (!frequencyCounter[item]) {
      return false;
    }
    // frequencyCounter[item]값 1 감소
    frequencyCounter[item] -= 1;
  }

  return true;
};

const first = "im fearless";
const second = "le sserafim";

console.log(betterSolution(first, second)); // true
```

기존의 solution과의 차이는 다음과 같다.

- 문자열을 그대로 사용하지 않고 `객체`를 사용한다.
    - 객체에 `key`값을 이용해 접근하는 것은 배열과 달리 시간복잡도가 `O(1)`이다.
- for문 안에 for문이 있는것이 아닌 첫번째 for문의 실행이 끝난 후 다음 for문이 실행된다.
    - O(N + N) = O(2N) = `O(N)`에 해당하기 때문에 시간복잡도가 상당히 줄어들었음을 알 수 있다.

<br/>

`frequency Counter`의 핵심은 `객체`를 이용한다는 점이다. 코드는 길어지지만 시간복잡도가 무려 O(N^2)에서 O(N)이 되버리니 꽤나 유용한 패턴이라고 할 수 있겠다.

특히 배열간의 검증의 경우 그 정도가 더욱 심하니 frequency Counter를 잘 이용한다면 좋은 코드를 작성할 수 있지 않을까 싶다.