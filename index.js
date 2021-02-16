// first line
// assignment with branches

const sentence =
  "This is the assignment to count the words of a sentence in three ways";
const countWords = (str) =>
  console.log(`The sentence has ${str.trim().split(/\s+/).length} words`);
countWords(sentence);
