//letter constructor check for a match 

class Letter{
    constructor(letter){
        this.character = letter;
        this.match = false;
    }
    letterMatch(){
        if(this.match === false){
            return "_";
        } else {
            return this.character;
        }
    }
}

export default Letter;

