

function reset(){
    guessesLeft = 10;
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
             "brachiosaurus", "stegosaurus", "triceratops" ];
let guessesLeft = 10;
let wins = 0;
let losses = 0;
let compChoiceIndex = Math.floor(Math.random() * words.length);

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

for (i = 1; i <= compChoice.length; i++) {
wordHolder.push("_");
}
document.getElementById("placeholder").textContent = wordHolder.join(" ");

// adding keyboard function for user guesses
document.onkeyup = function(event){
    let userGuess = event.key.toLowerCase();
    console.log(userGuess);

    if (guessedLetters.indexOf(userGuess) < 0) {
    guessedLetters.push(userGuess);
    document.getElementById("guessedLetters").textContent = guessedLetters.join(" ");
    }

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

    if (guessesLeft == 0) {
        losses++;
        document.getElementById("losses").textContent = losses;
        reset();
    }

    
    if (wordHolder.toString() === wordArray.toString()) {
        wins++;
        document.getElementById("wins").textContent = wins;
        reset();
    }
    
   
    
}



