// 내풀이
function solution(str) {
  let answer = [];
  let cnt = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      cnt++;
    } else {
      answer.push(str[i]);
      if (cnt > 1) answer.push(cnt);
      cnt = 1;
    }
  }
  return answer.join('');
}

let str = 'KKHSSSSSSSE';
solution(str);

// 해설
function solution2(s) {
  let answer = '';
  let cnt = 1;
  s = s + ' ';
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}
