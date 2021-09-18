// indexOf
function solution(str) {
  let answer = "";
  // console.log(str.indexOf('k'))
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i], i, str.indexOf(str[i]));
    if (str.indexOf(str[i]) === i) answer += str[i];
  }
  return answer;
}

console.log(solution("ksekkset"));

// indexOf를 사용한 특정문자 개수 찾기
function solution2(str) {
  let answer = 0;
  let pos = str.indexOf("o");
  while (pos !== -1) {
    answer++;
    pos = str.indexOf("o", pos + 1);
  }
  return answer;
}

console.log(solution2("goood"));
