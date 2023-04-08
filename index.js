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

/*Both the amount of Guess a user has and the word choice is at random.
The amount of remaining guesses is between 10 and 15. */

let remainingGuesses = 0;
let currentWord = null;
let generatedWord = "";

function initializeVariables(){
    generatedWord = wordsChoices[Math.floor(Math.random() * wordsChoices.length)]
    remainingGuesses = Math.floor(Math.random() * 10) + 5;
    currentWord = new Word(generatedWord);
    currentWord.getLetter();
    console.log(currentWord.renderWord() + "\n");
    console.log("Remaining Guesses: " + remainingGuesses + "\n");
    /*console.log(currentWord.characters);
    console.log(currentWord.renderWord());
    console.log(generatedWord);
    console.log(remainingGuesses);*/
    promptUser();
}

function promptUser(){
    if(remainingGuesses > 1){
        inquirer.prompt({
            name: "userchoice",
            message: "Guess a letter.",
            type: "input"
        }).then((answers)=>{
            //console.log(answers.userchoice)
            console.log("\n" + currentWord.renderWord() + "\n");
            remainingGuesses--;
            console.log("\n" + "Remaining Guesses: " + remainingGuesses + "\n");
            promptUser();
        })
    } else{
        console.log("You Lost." + "\n");
        inquirer.prompt({
            name: "userchoice",
            message: "Would you like to try again",
            type: "confirm"
        }).then((answers)=>{
            if(answers.start === true){
                startGame();
            } else{
                process.exit()
            }
        })
    }
 
}

function startGame(){
    console.log("\nWelcome to Command Line Hangman");
    inquirer.prompt({
        name: "start",
        message: "Would you like to play",
        type: 'confirm'
    }).then((answers) => {
        if(answers.start === true){
            console.log("\nOK\n")
            console.log("The rules are simple. I will choose a word from a small list and you will try to guess the word letter for letter \n" + 
            "A predetermined amount of guesses will be given and if you guess the word before the the limit reaches zero, you win!\n")
            initializeVariables();
        }else{
            console.log("bye")
        }
        
        console.log(answers.start)
    }).catch((error)=>{
        if(error){
            console.log(error)
        }
    })
}

/*
inquirer.prompt({
    name: "test",
    message: "test working?",
    type: 'input'
}).then(function(answers){
    console.log(answers)
});
*/
startGame();

