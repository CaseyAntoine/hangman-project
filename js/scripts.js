var quotes = ["Word", "Hippo", "Grapefruit", "Bears", "Beets", "BattleStar Galatica", "Jack Sparrow"];
var vowels = ['a', 'e', 'i', 'o', 'u'];
var random = quotes[Math.floor(Math.random()*quotes.length)];

var dash = '-';

console.log(random);



var puzzleWord = random.split('');
console.log(puzzleWord);

for (i=0; i < puzzleWord.length; i++) {
  if (puzzleWord[i] === vowels[i]) {
    console.log("replace the vowel.");
  } else {
    console.log("Moving on");
  }
}



$(function() {
  $('form').submit(function(event) {
    event.preventDefault();


var vowels = ['a', 'e', 'i', 'o', 'u'];
var input = $('#userInput').val();


});
});
