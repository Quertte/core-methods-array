function firstUnder(numbers, limit) {
  return numbers.find(el => el <= limit);
}


function startsWith(strings, letter) {
  return strings.find((el) => el[0] === letter);
}

function startsWith(strings, letter) {
  for (let i = 0; i < strings.length; i++) {
    if (strings[i][0] === letter) return strings[i];
  }
}


