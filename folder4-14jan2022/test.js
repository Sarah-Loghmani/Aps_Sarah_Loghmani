function solution(number) {
  let arr = [];
  number--;
  console.log(number);
  if (number < 0) {
    return 0;
  }
  while (true) {
    if (number % 3 === 0 || number % 5 === 0) {
      arr.push(number);
    }
    number--;
    if (number === 0) {
      break;
    }
  }
  //   console.log(arr)
  return arr.reduce((a, b) => a + b);
}
