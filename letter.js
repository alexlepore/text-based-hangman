//letter constructor check for a match 

class Letter{
    constructor(letter){
        this.character = letter;
    }
    letterMatch(){
        if(this.match === false){
            return "_";
        } else {
            return this.letter;
        }
    }
}

export default Letter;

