// filter 조건에 true인 요소만 뽑아 새 배열만듬
function solution(str) {
  let answer;
  answer = str.filter((s, i) => {
    // if (str.indexOf(s) === i) return true;
    return str.indexOf(s) === i;
  });

  return answer;
}

let str = ["good", "time", "good", "time", "student"];

console.log(solution(str));
