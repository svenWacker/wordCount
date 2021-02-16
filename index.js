const sentence =
  "This is the assignment to count the words of a sentence in three ways";

// first branch
// function wordCountUsingSplit(str) {
//   let words = str.split(" ");
//   if (str == 0 || words == ``) {
//     console.log(`No words`);
//   } else {
//     console.log(`There are ${words.length} words`);
//   }
// }
// wordCountUsingSplit(sentence);
// wordCountUsingSplit("    ");

// second branch
// console.log("Word count is = " + sentence.split(" ").length);

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
