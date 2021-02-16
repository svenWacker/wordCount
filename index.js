const sentence =
  "This is the assignment to count the words of a sentence in three ways";

//third branch
function wordCountUsingFor(str) {
  let wordCount = 1;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == " " && str.charAt(i + 1) != "") {
      wordCount++;
    }
  }
  console.log(`There are ${wordCount} words`);
}
wordCountUsingFor(sentence);
// wordCountUsingFor("     ");
