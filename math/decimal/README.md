## 에라토스테네스의 채를 이용하여 소수 판별하기

1 ~ `number`까지 소수를 판별할 때 가장 작은 소수인 `2`부터 소수의 `배수`를 `소거`해 나가면 소수를 판별할 수 있다.

---

number = `17`일 때 진행 과정은 다음과 같다.

- index값이 `0`과 `1`인 원소를 제외한 모든 원소를 `true`로 초기화한다. 이렇게 하면 가장 작은 소수인 `2`부터 `17`까지 `true`의 값을 가지게 된다.
- 소수인 `2`가 `true`이기 때문에 `2`의 배수를 모두 `false`로 초기화한다. => [4, 6, 8, 10, 12, 14, 16] = `false`
- 그 다음 수인 `3`이 `true`이기 때문에(=소수) 3의 배수를 모두 `false`로 초기화한다. => [6, 9, 12, 15] = `false`
- 그 다음 수인 `4`가 `false`이기 때문에(!=소수) 다음으로 넘어간다.
- 그 다음 수인 `5`는 `true`이지만 `5*1`, `5*2`, `5*3`까지 모두 판별이 완료된 상황에서 `5*4`가 `number`를 초과하기 때문에 로직을 중단한다.

1 ~ 17까지의 약수 = [2, 3, 5, 7, 11, 13, 17]

---

### 소스코드

```javascript
const decimal = (number) => {
    // 크기가 number+1인 array를 선언함과 동시에 모든 원소를 true로 채우되 0, 1은 false로 변경
    let result = Array(number + 1).fill(true).fill(false, 0, 2);

    // 가장 작은 소수인 2부터 i^2가 number보다 크지 않을때 까지 반복
    for (let i=2; i*i<=number; i++) {
        if (result[i]) {
            for (let j=i*i; j<=number; j+=i) {
                result[j] = false;
                /* result[i]가 true(=소수)일 경우 i ~ number까지
                i의 배수를 모두 false로 전환, 해당 로직을 반복한다. */
            }
        }
    }

    // 0 제거
    result.splice(0, 1);
    return result;
}
```