const devisor = (target) => {
  result = new Set();
  // 1 ~ 제곱근까지 연산
  for (let i = 1; i < Math.sqrt(target); i++) {
    if (target % i === 0) {
      // 나누는 수
      result.add(i);
      if (target / i != 0) {
        // 몫
        result.add(target / i);
      }
    }
  }

  // 정렬 및 array 자료형으로 변환
  return [...result].sort((a, b) => a - b);
};
