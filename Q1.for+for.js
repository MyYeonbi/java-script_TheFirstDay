/**## 문제1. for 문 + if 문

- 1 부터 100 까지의 숫자 중에서 2와 5의 배수의 합을 구하시오
- 단, 10의 배수는 제외하고 합산을 구하시오 */

let twoMultiple = 0;
let fiveMultiple = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0 && i % 10 !== 0) {
    twoMultiple = twoMultiple + i;
  }
  if (i % 5 === 0 && i % 10 !== 0) {
    fiveMultiple = fiveMultiple + i;
  }
}

console.log(twoMultiple, fiveMultiple);
