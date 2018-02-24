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

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessChoices = [];

document.onkeyup = function(event) {
  var userGuess = event.key;

  var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
  console.log(compGuess);

  if (userGuess === compGuess) {
    wins++;
    numGuesses = 9;
    guessChoices = [];
  }

  if (userGuess != compGuess) {
    guessesLeft--;
    guessChoices.push(userGuess);
  }

  if (guessesLeft === 0) {
    guessesLeft = 9;
    losses++;
    guessChoices = [];
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
