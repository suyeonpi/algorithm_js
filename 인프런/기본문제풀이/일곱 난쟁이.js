// 먼저 9개의 총합을 구해 놓고 i번째와 j번째 인자의 합을 총합에서 빼본다
// Sum - (arr[i] + arr[j]) = 100
function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1); // j를 먼저 지운다. i를 먼저 지우면 뒤에 배열이 당겨오기 때문에
        arr.splice(i, 1);
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
