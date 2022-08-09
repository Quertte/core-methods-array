
// Работать это должно вот так:
// myForEach([1,2,3], (el) => console.log(el));
// const newArr = myMap([1,2,3], (el) => el * 2);


function myForEach(array, callBack) {
  for (let i = 0; i < array.length; i++) {
    callBack(array[i]);
  }
}

function myMap(array, callBack) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callBack(array[i]));
  }
  return result;
}

function myFilter(array, callBack) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callBack(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

function myFind(array, callBack) {
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
    if (callBack(array[i])) {
      result = array[i];
      break;
    }
  }
  return result;
}

function myEvery(array, callBack) {
  let result = true;
  for (let i = 0; i < array.length; i++) {
    if (!callBack(array[i])) {
      result = false;
      break;
    }
  }
  return result;
}

// console.log(myEvery([1, 2, 3, 4, 5, 6, -7, 8], elem => elem > 0));

function mySome(array, callBack) {
  let result = false;
  for (let i = 0; i < array.length; i++) {
    if (callBack(array[i])) {
      result = true;
      break;
    }
  }
  return result;
}

console.log(mySome([1, 2, 3, 4, 5, 6, 7, 8], elem => elem < 0));

function myReduce(array, callBack) {
  const result = 0;
  
}
