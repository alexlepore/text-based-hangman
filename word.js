import Letter from "./letter.js";

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
    letterMatch(guess){
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
    }
    wordCompletion(){
        if(this.characters.every((currentLetter) => currentLetter.match === true)){
            this.found = true;
        } return this.found;
    }
}

export default Word;
