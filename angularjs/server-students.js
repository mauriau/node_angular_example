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
    password : 'root',
    database : 'esgi',
});
connection.connect();


app.delete("/names", function(req, res){
    
    connection.query("DELETE FROM students", function(){
        
         res.json({success:true});
    });
    
});

app.get("/names", function(req, res){
   
//  var count = req.query.count;
//  if (!count)
      count = 50;
    
    connection.query("SELECT * FROM names LIMIT " + count, function (error, rows)
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
app.get("/names/:id", function(req, res){
    var id = req.params.id;
    
    connection.query("SELECT * FROM names WHERE id = " + id, function(error, rows){
        res.json(rows);
    });
});

// - /names/ POST : ajoute un nouveau nom
app.post("/names/", function(req, res){
    
    connection.query("INSERT INTO names (name) VALUES ('" + req.body.name + "')", function(error){
        if (error)
            console.log(error);
       res.json({success:true}); 
    });
    
});
// - /names/id DELETE : supprime le nom correspondant à l'ID
app.delete("/names/:id", function(req, res){
    var id = req.params.id;
    
    connection.query("DELETE FROM names WHERE id = " + id, function(error, rows){
        res.json({success:true});
    });
});

// - /names/id PUT : modifie le nom correspondant à l'ID
app.put("/names/:id", function(req, res){
    var id = req.params.id;
    var newName = req.body.name;
    connection.query("UPDATE names SET name = '" + newName + "' WHERE id = " + id, function(){
        res.json({success:true});
    });
});

// indication : app.put("/names/:id", function (....)


console.log("Serveur started on 8000");
app.listen(8000);




