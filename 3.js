function match(input, query) {
  let arr = [];
  for (let i = 0; i < query.length; ++i) {
    let count = 0;
    for (let j = 0; j < input.length; ++j) {
      if (query[i] == input[j]) {
        count += 1;
      }
    }
    arr.push(count);
  }
  return arr;
}

console.log(match(["xc", "dz", "bbb", "dz"], ["bbb", "ac", "dz"]));
