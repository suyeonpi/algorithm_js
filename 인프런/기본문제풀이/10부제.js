// day - 날짜의 일의자리
// arr - 7개의 차
function solution(day, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 === day) answer++;
  }

  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
