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