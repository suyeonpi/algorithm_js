// substring(시작인덱스, 마지막인덱스) 마지막인덱스 미포함
function solution1(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);

  return answer;
}

console.log(solution1("study"));

// substr(시작인덱스, 뽑을 갯수)
function solution2(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substr(mid, 1);
  else answer = s.substr(mid - 1, 2);

  return answer;
}

console.log(solution2("good"));
