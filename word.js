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
    match(){
        let lettersFound = [];
        let guessCount = 0;
        for(let i = 0; i < this.characters.length; i++){
            if(guess === this.characters[i].character.toLowerCase()){
                this.characters[i].match = true;
                lettersFound.push(guess);
                guessCount += 1;            
            } else {
                guessCount += 1;
            }
        }
        return lettersFound;
    }
    renderWord(){
        let str = "";
        for(let i = 0;  i < this.characters.length; i++){
            str += this.characters[i].letterMatch() + " ";
        }
        return str;
        //console.log(str)
    }
    /*
    wordcompletion(){

    }*/
}

export default Word;

//test
/*
let dog = new Word("dog");
dog.getLetter();

console.log(dog.characters)

inquirer.prompt({
    name: "test",
    message: "guess a letter",
    type: 'input'
}).then(function(answers){
    //answers is an obbject
    //answers.test
    console.log(answers.test)
    console.log(typeof answers.test)
    dog.letterMatchCheck(answers.test);
    console.log(dog.characters)
    dog.renderWord();
});
*/
