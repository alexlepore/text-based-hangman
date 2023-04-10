import inquirer from "inquirer";
import chalk from "chalk";
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

/*Both the amount of guesses a user has and the word choice is at random.
The amount of remaining guesses is between 10 and 15. */

let remainingGuesses = 0;
let currentWord = null;
let generatedWord = "";

function initializeVariables(){
    generatedWord = wordsChoices[Math.floor(Math.random() * wordsChoices.length)]
    remainingGuesses = Math.floor(Math.random() * (15 - 10)) + 10;
    currentWord = new Word(generatedWord);
    currentWord.getLetter();
    console.log(currentWord.renderWord() + "\n");
    console.log(chalk.bgRed.white("Remaining Guesses: " + remainingGuesses + "\n"));

    /* console.log helper test
    console.log(currentWord.characters);
    console.log(currentWord.characters[0].match);
    console.log(currentWord.renderWord());
    console.log(generatedWord);
    console.log(remainingGuesses);
    */

    promptUser();
}

function promptUser(){
    currentWord.wordCompletion();
    if(currentWord.found == true){
        console.log(chalk.bold.green("Congrats you won!"))
        inquirer.prompt({
            name: "userchoice",
            message: "Would you like to try again",
            type: "confirm"
        }).then((answers)=>{
            if(answers.userchoice === true){
                console.log("\n" + "***************************")
                console.log(chalk.bgYellow("\n" + "Good Luck."))
                initializeVariables();
            } else{
                process.exit()
            }
        })
    } else{
        if(remainingGuesses > 1){
            inquirer.prompt({
                name: "userchoice",
                message: "Guess a letter.",
                type: "input"
            }).then((answers)=>{
                //console.log(answers.userchoice)
                currentWord.letterMatch(answers.userchoice);
                console.log("\n" + currentWord.renderWord() + "\n");
                remainingGuesses--;
                console.log(chalk.bgRed.white("\n" + "Remaining Guesses: " + remainingGuesses + "\n"));
                promptUser();
            })
        } else{
            console.log(chalk.red("You Lost." + "\n"));
            inquirer.prompt({
                name: "userchoice",
                message: "Would you like to try again",
                type: "confirm"
            }).then((answers)=>{
                if(answers.userchoice === true){
                    console.log("\n" + "***************************")
                    console.log(chalk.bgYellow("\n" + "Good Luck."))
                    initializeVariables();
                } else{
                    process.exit()
                }
            })
        }
    }
}

function startGame(){
    console.log(chalk.greenBright.bold("\nWelcome to Command Line Hangman"));
    inquirer.prompt({
        name: "start",
        message: "Would you like to play",
        type: 'confirm'
    }).then((answers) => {
        if(answers.start === true){
            console.log("\nOK\n")
            console.log(chalk.italic("The rules are simple. I will choose a word from a small list and you will try to guess the word letter for letter \n" + 
            "A predetermined amount of guesses will be given and if you guess the word before the the limit reaches zero, you win!\n"));
            initializeVariables();
        }else{
            console.log("bye")
        }      
    }).catch((error)=>{
        if(error){
            console.log(error)
        }
    })
}

startGame();

