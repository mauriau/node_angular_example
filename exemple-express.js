var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname ));


var mysql = require("mysql");
var connection = mysql.createConnection({
    host : "localhost",
    user : 'root',
    password : '',
    database : 'esgi',
});
connection.connect();


app.delete("/names", function(req, res){
    
    connection.query("DELETE FROM students", function(){
        
         res.json({success:true});
    });
    
});

app.get("/names", function(req, res){
   
  var count = req.query.count;
  if (!count)
      count = 2;
    
    connection.query("SELECT * FROM students LIMIT " + count, function (error, rows)
    {
        if(error){
            console.log(error);
            res.json({error:"Un problème est arrivé lors de la connexion"})
            return;
    }

    res.json(rows);
    });
    
});

// coder un service RestFul complet, à savoir
// - /names/id GET : retourne le nom correspondant à l'ID
// - /names/ POST : ajoute un nouveau nom
// - /names/id DELETE : supprime le nom correspondant à l'ID
// - /names/id PUT : modifie le nom correspondant à l'ID

// indication : app.put("/names/:id", function (....)


console.log("Serveur started on 8000");
app.listen(8000);




