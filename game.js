var compChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

//Setting variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];

//Capturing user's guess
document.onkeyup = function(event) {
  var userGuess = event.key;

  //Computer generates random guess
  var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
  console.log(compGuess);

  //Function checks to see if userGuess is already a part of guessedLetters array. If not, it will push userGuess there. If it is, it will alert user and re-add a guess.
  function repeatGuess(guessedLetters) {
    guessedLetters.indexOf(userGuess) < 0;

    if (guessedLetters.indexOf(userGuess) < 0) {
      guessedLetters.push(userGuess);
    } else {
      alert("You already guessed that letter. Try again!");
      guessesLeft++;
    }
  }
  repeatGuess(guessedLetters);

  //If statements dictating outcome based on the above choices
  //If guesses are the same, add 1 to wins, reset guesses to 9 and empty guesses so far array
  if (userGuess === compGuess) {
    wins++;
    guessesLeft = 9;
    guessedLetters = [];
    compGuess = "";
  } else {
    //If guesses are different, remove 1 from guesses left
    guessesLeft--;
  }
  //If total guesses equal 0, add 1 to losses, reset guesses to 9, clear guesses array and reset compGuess to show nothing
  if (guessesLeft === 0) {
    losses++;
    guessesLeft = 9;
    guessedLetters = [];
    compGuess = "";
  }

  var html =
    "<h1> The Psychic Game </h1>" +
    "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Your Guesses so far: " +
    guessedLetters.join(", ") +
    "</p>" +
    "<p>The Computer Guessed: " +
    compGuess +
    "</p>" +
    "<p>Wins: " +
    wins +
    "</p>" +
    "<p>Losses: " +
    losses +
    "</p>" +
    "<p>Guesses Left: " +
    guessesLeft +
    "</p>";

  document.querySelector("#game").innerHTML = html;
};
