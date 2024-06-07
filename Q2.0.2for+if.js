/**## 문제2. 2중 for 문 + if 문

- 구구단을 출력하는 2중 for문을 작성 하세요
- 단, 구구단 중에서 2, 4, 6, 8 단의 결과 값을 합산하여 최종 결과를 출력 하세요 */

let sum = 0;

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
    if (i % 2 == 0) {
      sum = sum + i * j;
    }
  }
}
