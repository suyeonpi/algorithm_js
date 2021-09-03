// 내가 푼 문제
function solution(n) {
  let answer;
  if (n % 12 === 0) {
    answer = Math.floor(n / 12);
  } else {
    answer = Math.floor(n / 12) + 1;
  }
  return answer;
}

console.log(25);

// 풀이
// Math.ceil 이용
function solution(n) {
  let answer = Math.ceil(n / 12);

  return answer;
}
