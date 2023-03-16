// add two arrays together
// this function does not mutate the original input
function concat(arr1, arr2) {
  // we want a copy of arr1 or arr2
  let catted = [...arr1];
  let popping = [...arr2];

  for (const ele of popping) {
    catted.push(ele);
  }
  return catted;
}

console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);
