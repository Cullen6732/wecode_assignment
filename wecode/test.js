let a = 24; // 짝수
let b = 17; // 홀수

function checkEvenNumber(num) {
  let remainder = num % 2; // 나머지
  if (remainder === 0) {
    return true;
  }
  return false;
}

let testA = checkEvenNumber(a);
console.log(testA); // returns true
let testB = checkEvenNumber(b);
console.log(testB); // returns false
