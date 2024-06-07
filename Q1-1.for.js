/** ## 문제1-1. 추가 문제
- 1 부터 100 까지의 숫자 중에서 2와 5의 공배수의 합을 구하시오*/

let sum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    console.log(i);
    sum = sum + i;
  }
}

console.log(sum);
