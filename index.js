const sentence =
  "This is the assignment to count the words of a sentence in three ways";

// second branch
function wordCountUsingMatch(str) {
  let matches = str.match(/[\w\d\’\'-]+/gi);
  return matches ? matches.length : 0;
}
console.log(wordCountUsingMatch(sentence));
