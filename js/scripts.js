// var quotes = ["Word", "Hippo", "Grapefruit", "Bears", "Beets", "BattleStar Galatica", "Jack Sparrow"];
// var vowels = ['a', 'e', 'i', 'o', 'u'];
// var random = quotes[Math.floor(Math.random()*quotes.length)];
//
// var dash = '-';
//
// console.log(random);
//
//
//
// var puzzleWord = random.split('');
// console.log(puzzleWord);
//
//
// $(function() {
  //
  //   for (i=0; i < puzzleWord.length; i++) {
    //     if (puzzleWord[] === vowels[]) {   compare contents of arrays to each other
      //       console.log("replace the vowel");
      //     } else {
        //       console.log("Moving on");
        //     }
        //   }
        //
        //
        // $('#puzzleHere').text(random);
        //
        //
        //
        //
        //
        //   $('form').submit(function(event) {
          //     event.preventDefault();
          //
          //
          // var vowels = ['a', 'e', 'i', 'o', 'u'];
          // var input = $('#userInput').val();
          //
          //
          // });
          // });

          $(function() {

            var goodAnswer = ["Word", "Hippo", "Grapefruit", "Bears", "Beets", "BattleStar Galatica", "Jack Sparrow"];

             var random = goodAnswer[Math.floor(Math.random()*goodAnswer.length)];

            var answerArray = [];
            answerArray = random.split('');

            for(i = 0; i < goodAnswer.length + 20; i++) {
              if (answerArray[i] === 'a' || answerArray[i] === 'e' || answerArray[i] === 'i' || answerArray[i] === 'o' || answerArray[i] === 'u') {
                $('#hidden').append('-');
              } else {
                $('#hidden').append(answerArray[i]);
              }
            };

            $('form').submit(function(event) {
              event.preventDefault();

              $('#hiddenincorrect').hide();
              $('#hiddencorrect').hide();

              if($('#guess').val() === random) {
                $('#hiddencorrect').show();
              } else {
                $('#hiddenwrong').show();
              }

            })







          })
