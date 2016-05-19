var name = process.argv[2];
var age = process.argv[3];
var enter = process.argv[4];

console.log("Bonjour " + name + ", vous avez " + age + " ans");

if (enter == "true")
    console.log("vous pouvez rentrer");
else
    console.log("vous ne pouvez pas rentrer");

//récupérer les parametres fournis pas l'utilisateurs
// exemple : nodejs script.js James 14 true
// et afficher en retour
// > Bonjour James, vous avez 14 ans
// 
// Si le dernier paramètre est à true
// afficher :  "vous pouvez rentrer"
// sinon, afficher : "vous ne pouvez pas rentrer"
