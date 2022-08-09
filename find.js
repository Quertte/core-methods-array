function firstUnder(numbers, limit) {
  return numbers.find(el => el <= limit);
}

console.log(firstUnder([2, 4, 6, 8, 10], 10));

function startsWith(strings, letter) {
  // for (let i = 0; i < strings.length; i++) {
  //   if (strings[i][0] === letter)
  //     return strings[i]
  // }
  return strings.find((el) => el[0] === letter);
}

console.log(startsWith(['Andrew', 'Vasya', 'Petya'], 'P'));
