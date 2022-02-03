function solution(str) {
  let answer = 'YES';
  str = str.toLowerCase();
  let len = str.length;
  let half = Math.floor(len / 2);
  for (let i = 0; i < half; i++) {
    if (str[i] !== str[len - i - 1]) return 'NO';
  }
  return answer;
}

function solution2(str) {
  let answer = 'YES';
  str = str.toLowerCase();
  if (str.split('').reverse().join('') !== str) return 'NO';

  return answer;
}

let str = 'gooG';
solution(str);
solution2(str);
