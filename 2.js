function longest(sentence) {
  let split = sentence.split(" ");
  let count = 0;
  let word = "";

  for (let i = 0; i < split.length; i++) {
    if (split[i].length > count) {
      count = split[i].length;
      word = split[i];
    }
  }
  return word;
}

console.log(longest("Saya sangat senang mengerjakan soal algoritma"));
