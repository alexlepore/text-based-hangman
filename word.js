import Letter from "./letter.js";
import inquirer from "inquirer";

export function Word(word){
    this.word = word;
    this.characters = [];
    this.found = false;
    //getLetter function process the word and goes through 
    //each letter in the current word and puts them in an array
    /*this.getLetters = function(){
        for(let i =0; i < word.length; i++){
            this.characters.push(new Letter(word[i]));
        }
    };*/
    this.letterMatchCheck = function(guess){
        let lettersFound = [];
        for(let i = 0; i < this.characters.length; i++){
            if(guess.toLowerCase() === this.characters[i].toLowerCase()){
                this.characters[i].appear = true;
                lettersFound.push(guess)
            }
        }
        
        return lettersFound;
    }

}

/*let dog = new Word("dog");
dog.getLetters();
console.log(dog.characters)
test to see if letter constructors prints an array of letters
*/

inquirer.prompt({
    name: "test",
    message: "Take a guess?",
    type: 'input'
}).then(function(answers){
    console.log(answers)
})
