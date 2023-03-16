function calculateRectangleArea(length, width) {
  //negative input not allowed
  if (length < 0 || width < 0) {
    return undefined;
  }
  return length * width;
}
function calculateTriangleArea(base, height) {
  //negative input not allowed
  if (base < 0 || height < 0) {
    return undefined;
  }
  return base * (height / 2);
}
function calculateCircleArea(radius) {
  //negative input not allowed
  if (radius < 0) {
    return undefined;
  }
  return Math.PI * (radius * radius);
}
