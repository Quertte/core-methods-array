function sum(arrayNumbers, sum = 0) {
  return arrayNumbers.reduce((sum1, current) => sum1 + current, sum);
}

console.log(sum([1, 2, 3, 4, 5], 6));
