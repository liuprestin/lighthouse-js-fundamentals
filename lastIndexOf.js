function lastIndexOf(arr, num) {
  //test flipped array - use difference with length for the output
  // if the values does not exist return -1
  let flipped_arr = arr.reverse();
  let count = 0;
  let index = undefined;
  //edge case of single value in array
  if (arr.length == 1 && arr[0] == num) {
    return -1;
  }

  while (count < flipped_arr.length - 1) {
    if (flipped_arr[count] == num) {
      index = count;
      break;
    }
    count += 1;
  }
  // went through the array and found no value
  if (typeof index == "undefined") {
    return -1;
  }
  return flipped_arr.length - index - 1;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);


