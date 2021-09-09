function solution1(s) {
  let answer = "";
  for (let x of s) {
    if (x === x.toLowerCase()) {
      answer += x.toUpperCase();
    } else {
      answer += x;
    }
  }

  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution1(str));

// 아스키코드
// 대문자와 소문자 차이 = 32
function solution2(s) {
  let answer = "";
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;
  }
  return answer;
}

let str2 = "IamVeryHungry";
console.log(solution2(str2));
