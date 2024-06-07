/**## 문제3. for 문 배열
- arr1 = [’가’, ‘나’, ‘다’, ‘라’, ‘마’, ‘바’, ‘사’] 배열이 주어 졌을 때, 배열의 값을 console.log 로 출력해 주세요 */

const arr = ['가', '나', '다', '라', '마', '바', '사'];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

/** 인덱스가 2의 배수일 때만 출력하기*/
const arr1 = ['가', '나', '다', '라', '마', '바', '사'];

for (let i = 0; i < arr1.length; i++) {
  if (i % 2 === 0) {
    console.log(arr1[i]);
  }
}
