function solution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  // Array.from() : array를 만듬

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i] < arr[j]) answer[i]++;
    }
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));

// 이중 배열을 돌면서 자기보다 값이 컸을때 자신의 등수를 낮춘다. (숫자 올린다)
