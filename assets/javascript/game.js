

function reset() {
    guessesLeft = 15;
    document.getElementById("guessesLeft").textContent = guessesLeft;

    guessedLetters = [];
    document.getElementById("guessedLetters").textContent = guessedLetters;

    compChoiceIndex = Math.floor(Math.random() * words.length);
    compChoice = words[compChoiceIndex];
    wordArray = compChoice.split("");

    wordHolder = [];
    for (i = 1; i <= compChoice.length; i++) {
        wordHolder.push("_");
    }

    document.getElementById("placeholder").textContent = wordHolder.join(" ");
}
let words = ["tyrannosaurus", "velociraptor", "pterodactyl",
    "brachiosaurus", "stegosaurus", "triceratops", "dilophosaurus",
     "gallimimus", "spinosaurus", "compsognathus"];
let guessesLeft = 15;
let wins = 0;
let losses = 0;
let compChoiceIndex = Math.floor(Math.random() * words.length);
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let compChoice = words[compChoiceIndex];

let guessedLetters = [];

// Splitting the computer's choice into an array of letters. 
let wordArray = compChoice.split("");
console.log(wordArray);

document.getElementById("wins").textContent = wins;
document.getElementById("losses").textContent = losses;
document.getElementById("guessesLeft").textContent = guessesLeft;

// Creating a placeholder spot on the page for the word indicating the length of the word
// and to hold correct guesses.
let wordHolder = [];

// putting a "_" for every letter in word to guess
for (i = 1; i <= compChoice.length; i++) {
    wordHolder.push("_");
    document.getElementById("placeholder").textContent = wordHolder.join(" ");
}


// making a typed letter equal a user guesses
document.onkeyup = function (event) {
    if (letters.indexOf(event.key) != -1 && guessedLetters.indexOf(event.key) == -1) {
        var userGuess = event.key.toLowerCase();

    }

    // adds user guess to guessed letters. 
    if (guessedLetters.indexOf(userGuess) < 0) {
        guessedLetters.push(userGuess);
        document.getElementById("guessedLetters").textContent = guessedLetters.join(" ");
    }

    // adds correct user guess to word holder. 
    for (i = 0; i < compChoice.length; i++) {
        if (userGuess === wordArray[i]) {
            wordHolder[i] = userGuess;
            document.getElementById("placeholder").textContent = wordHolder.join(" ");
        }
    }

    // subtracts 1 from "Guesses Left" for every guess.
    if (userGuess) {
        guessesLeft -= 1;
        document.getElementById("guessesLeft").textContent = guessesLeft;
    }

    // Resets the game if user runs out of guesses.
    if (guessesLeft == 0) {
        losses++;
        document.getElementById("losses").textContent = losses;
        reset();
    }

    // Upon win displays correct word for a couple seconds, adds 1 to wins and resets the game.
    if (wordHolder.toString() === wordArray.toString()) {
        wins++;
        document.getElementById("wins").textContent = wins;
        setTimeout(reset, 2000);
    }
}



