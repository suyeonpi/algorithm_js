// 내 풀이
function solution(s, t) {
  let p = 1000;
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t) p++;
    if (s[i] === t) p = 0;
    arr.push(p);
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== t) p++;
    if (s[i] === t) p = 0;
    if (arr[i] > p) arr[i] = p;
  }
  return arr.join('');
}

let s = 'teachemode';
let t = 'e';

solution(s, t);

// 해설
function solution2(s, t) {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0;
      answer[i] = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}
