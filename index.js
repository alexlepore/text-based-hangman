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
The amount of remaining guesses is between 5 and 10. */

let remainingGuesses = 0;
let currentWord = null;
let generatedWord = "";



function initializeVariables(){
    generatedWord = wordsChoices[Math.floor(Math.random() * wordsChoices.length)]
    remainingGuesses = Math.floor(Math.random() * 5) + 5;
    currentWord = new Word(generatedWord);
    currentWord.getLetter();
    console.log(currentWord.characters);
    console.log(currentWord.renderWord());

    console.log(generatedWord);
    console.log(remainingGuesses);

    //promptUser();

}
/*
function promptUser(){
    co
}*/

function startGame(){
    console.log("Welcome to Command Line Hangman");
    inquirer.prompt({
        name: "start",
        message: "Would you like to play?",
        type: 'confirm'
    }).then((answers) => {
        if(answers.start === true){
            console.log("OK")
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

