function subset(x, y) {
  const result = [];
  const subset = Array(y + 1).fill(0);

  function DFS(num) {
    if (num > y) {
      let tmp = "";
      for (let i = 0; i < y + 1; i++) {
        if (subset[i] === 1) {
          tmp += i + " ";
        }
      }
      if (tmp != "") result.push(tmp.trim());
    } else {
      subset[num] = 1;
      DFS(num + 1);
      subset[num] = 0;
      DFS(num + 1);
    }
  }

  DFS(x);
  return result;
}

console.log(subset(1, 3));
