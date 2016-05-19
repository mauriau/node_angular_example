// npm install minimist
var minimist = require("minimist");
var params = minimist( process.argv.slice(2), {
    string : "name",
    number : "age",
    boolean : "enter"
    
} );

console.log("Bonjour " + params.name + ", vous avez " + params.age + " ans");

if (params.enter)
    console.log("vous pouvez rentrer");
else
    console.log("vous ne pouvez pas rentrer");

// faire la meme chose que l'exercice 1
// mais grâce à minimist