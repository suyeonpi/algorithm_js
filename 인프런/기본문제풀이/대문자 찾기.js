function solution1(s) {
  let answer = 0;
  for (let x of s) {
    if (x === x.toUpperCase()) {
      answer++;
    }
  }

  return answer;
}

let str = "KoreaTimeGood";
console.log(solution1(str));

// 아스키 코드
// 대문자 65~90, 소문자 97~122
function solution2(s) {
  let answer = 0;
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 65 && num <= 90) answer++;
  }

  return answer;
}
