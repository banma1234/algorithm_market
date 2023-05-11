// 시간 복잡도가 O(N^2)인 알고리즘
const solution = (A, B) => {
  if (A.length !== B.length) {
    return false;
  }

  for (let item of A) {
    if (!B.includes(item)) {
      return false;
    }
    B = B.replace(item, "");
  }

  return true;
};

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

console.log("일반적인 solution")
let startNow = performance.now()
console.log(solution(first, second)); // true
let endNow = performance.now()
console.log(endNow - startNow)
console.log("======================");
console.log("개선된 solution");
startNow = performance.now();
console.log(betterSolution(first, second)); // true
endNow = performance.now();
console.log(endNow - startNow);
