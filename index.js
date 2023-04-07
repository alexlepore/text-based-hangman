import inquirer from "inquirer";
import Word from "./word.js";

inquirer.prompt({
    name: "test",
    message: "test working?",
    type: 'input'
}).then(function(answers){
    console.log(answers)
});

