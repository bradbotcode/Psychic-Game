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
var guessChoices = [];

//Capturing user's guess
document.onkeyup = function(event) {
  var userGuess = event.key;

  //Computer generates random guess
  var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
  console.log(compGuess);

  //If statements dictating outcome based on the above choices
  //If guesses are the same, add 1 to wins, reset guesses to 9 and empty guesses so far array
  if (userGuess === compGuess) {
    wins++;
    guessesLeft = 9;
    guessChoices = [];
    compGuess = "";
  } else {
    //If guesses are different, remove 1 from guesses left, push the user's guess to array
    guessesLeft--;
    guessChoices.push(userGuess);
  }
  //If total guesses equal 0, add 1 to losses, reset guesses to 9, clear guesses array and reset compGuess to show nothing
  if (guessesLeft === 0) {
    guessesLeft = 9;
    losses++;
    guessChoices = [];
    compGuess = "";
  }

  var html =
    "<h1> The Psychic Game </h1>" +
    "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Your Guesses so far: " +
    guessChoices.join(", ") +
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
