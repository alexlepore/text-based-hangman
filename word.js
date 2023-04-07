import Letter from "./letter.js";
import inquirer from "inquirer";

class Word{
    constructor(word){
        this.word = word;
        this.characters = [];
        this.found = false;
    }
    getLetter(){
        for(let i = 0; i < this.word.length;i++){
            this.characters.push(new Letter(this.word[i]));
        }
    }
    letterMatchCheck(guess){
        let lettersFound = [];
        for(let i = 0; i < this.characters.length; i++){
            if(guess.toLowerCase() === this.characters[i].toLowerCase()){
                this.characters[i].appear = true;
                lettersFound.push(guess)
            }
        }
        return lettersFound;
    }
    renderWord(){
        let str = "";
        for(let i = 0;  i < this.characters.length; i++){
            str += this.characters[i].letterMatch();
        }
    }
}

export default Word;

//test

let dog = new Word("dog");
dog.getLetter();

console.log(dog.characters)

inquirer.prompt({
    name: "test",
    message: "test working?",
    type: 'input'
}).then(function(answers){
    console.log(answers)
});

