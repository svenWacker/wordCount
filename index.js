// first branch
const sentence =
  "This is the assignment to count the words of a sentence in three ways";

function wordCountUsingSplit(str) {
  let words = str.split(" ");
  if (str == 0 || words == ``) {
    console.log(`No words`);
  } else {
    console.log(`There are ${words.length} words`);
  }
}
wordCountUsingSplit(sentence);
wordCountUsingSplit("    ");
