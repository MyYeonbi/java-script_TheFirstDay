/** ## 문제2-1. 2중 for 문 + if 문
- 구구단의 결과 값이 짝수인 구구단만 출력하세요*/

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    if ((i * j) % 2 === 0) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}
