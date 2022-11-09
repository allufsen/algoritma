function reverse(word) {
  let arr = [];
  for (let i = word.length - 1; i >= 0; i--) {
    arr.push(word[i]);
  }

  let last = arr[0];
  let first = "";
  for (let i = 0; i < arr.length - 1; i++) {
    first += arr[i + 1];
  }
  return first + last;
}

console.log(reverse("NEGIE1"));
