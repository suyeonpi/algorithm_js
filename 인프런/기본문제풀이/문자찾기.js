function solution1(str, s) {
  let answer = 0;
  for (let x of str) {
    if (x === s) answer++;
  }

  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

// split 사용
function solution2(str, s) {
  let answer = str.split(s).length;

  return answer - 1;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution2(str, "R"));
