// 삼각형의 조건
// 가장 젤 긴 변 < 나머지 두변의 합 -> Yes / No
function solution(a, b, c) {
  let answer = "YES",
    max;
  let sum = a + b + c;

  // 가장 긴 변 구하기
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  // 세 변의 합에서 긴변 빼서 긴변과 두 변의 합 대소 비교
  if (sum - max <= max) answer = "NO";
  return answer;
}

console.log(solution(13, 33, 17));
