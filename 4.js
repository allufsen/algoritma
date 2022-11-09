function matrix(arr) {
  let firstSum = 0;
  let lastSum = 0;
  for (let i = 0; i < arr.length; i++) {
    firstSum += arr[i][i];
    lastSum += arr[i][arr.length - i - 1];
  }
  return firstSum - lastSum;
}

console.log(
  matrix([
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
