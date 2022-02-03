// 내 풀이
function solution(str) {
  str = str.replace(/[a-zA-Z]/g, '');
  return Number(str);
}

let str = 'g0en2T0s8eSoft';
solution(str);

// 해설
function solution2(str) {
  let answer = 0;
  for (let x of str) {
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }
  return answer;
}

solution2(str);
