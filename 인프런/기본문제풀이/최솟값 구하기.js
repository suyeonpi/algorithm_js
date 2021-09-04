// min을 안정적인 큰 숫자로 초기화
function solution1(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

let arr = [5, 7, 1, 3, 9, 8, 11];
console.log(solution1(arr));

// min을 첫번째 숫자로 초기화
function solution2(arr) {
  let answer,
    min = arr[0];
  for (let i = 0; i < arr; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

// 내장함수로 최솟값, 최대값 구하기
// Math.min, Math.max 배열은 전개연산자 사용
function solution3(arr) {
  let answer = Math.min(...arr);
  // let answer = Math.max(...arr);
  return answer;
}

// 전개연산자 사용 없이
// let answer = Math.min.apply(null, arr)
