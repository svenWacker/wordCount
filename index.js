// first line
// assignment with branches

const sentence =
  "This is the assignment to count the words of a sentence in three ways";
function countWords(str) {
  return str.trim().split(/\s+/).length;
}
console.log(countWords(sentence));
