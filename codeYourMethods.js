
// Работать это должно вот так:
// myForEach([1,2,3], (el) => console.log(el));
// const newArr = myMap([1,2,3], (el) => el * 2);


function myForEach(array, callBack) {
  for (let i = 0; i < array.length; i++) {
    callBack(array[i]);
  }
}

function myMap(array, callBack) {
  for (let i = 0; i < array.length; i++) {
  }
}

function myFilter(array, callBack) {
  for (let i = 0; i < array.length; i++) {
    if (callBack(array[i])) {
    }
  }
}

function myFind(array, callBack) {
  for (let i = 1; i < array.length; i++) {
    if (callBack(array[i])) {
      break;
    }
  }
}

function myEvery(array, callBack) {
  for (let i = 0; i < array.length; i++) {
    if (!callBack(array[i])) {
      break;
    }
  }
}

function mySome(array, callBack) {
  for (let i = 0; i < array.length; i++) {
    if (callBack(array[i])) {
      break;
    }
  }
}

function myReduce(array, callBack, acc) {
  for (let i = 0; i < array.length; i++) {
    acc = ( !acc ) ? callBack(0, array[i]) : callBack(acc, array[i]);
  }
  return acc;
}

