function range(start, end, step) {
  let outarr = [];
  //Edge cases
  if (
    start > end ||
    step <= 0 ||
    typeof start == "undefined" ||
    typeof end == "undefined" ||
    typeof step == "undefined"
  ) {
    return [];
  }
  let counter = start;

  while (counter <= end) {
    outarr.push(counter);
    counter += step;
  }
  return outarr;
}

console.log(range(-5, 10, 2));
