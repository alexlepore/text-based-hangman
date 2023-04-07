import inquirer from "inquirer";
import Word from "./word.js";

let wordsChoices = [
    "javascript",
    "asychronous",
    "constructor",
    "class",
    "callback",
    "function",
    "array",
    "object",
    "scope",
    "inheritance"
]

let remainingGuesses = 0;
let currentWord = "";

function startGame(){
    currentWord = wordsChoices[Math.floor(Math.random() * wordsChoices.length)];
    remainingGuesses = Math.floor(Math.random() * 5) + 5;
    console.log(currentWord);
    console.log(remainingGuesses);
}

startGame();

inquirer.prompt({
    name: "test",
    message: "test working?",
    type: 'input'
}).then(function(answers){
    console.log(answers)
});

