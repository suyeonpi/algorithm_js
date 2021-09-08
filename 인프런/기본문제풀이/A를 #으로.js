function solution1(str) {
  let answer = "";
  for (let x of str) {
    if (x === "A") {
      answer += "#";
    } else answer += x;
  }

  return answer;
}

let str = "BANANA";
console.log(solution1(str));

// replace, 정규식표현 사용
function solution2(str) {
  let answer = str;
  answer = str.replace(/A/g, "#");

  return answer;
}

let str = "BANANA";
console.log(solution2(str));
