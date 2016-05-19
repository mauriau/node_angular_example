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


app.delete("/students", function(req, res){
    
    connection.query("DELETE FROM students", function(){
        
         res.json({success:true});
    });
    
});

app.get("/students", function(req, res){
   
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
// - /students/id GET : retourne le nom correspondant à l'ID
app.get("/students/:id", function(req, res){
    var id = req.params.id;
    
    connection.query("SELECT * FROM students WHERE id = " + id, function(error, rows){
        res.json(rows);
    });
});

// - /students/ POST : ajoute un nouveau nom
app.post("/students/", function(req, res){
    
    connection.query("INSERT INTO students (name) VALUES ('" + req.body.name + "')", function(error){
        if (error)
            console.log(error);
       res.json({success:true}); 
    });
    
});
// - /students/id DELETE : supprime le nom correspondant à l'ID
app.delete("/students/:id", function(req, res){
    var id = req.params.id;
    
    connection.query("DELETE FROM students WHERE id = " + id, function(error, rows){
        res.json({success:true});
    });
});

// - /students/id PUT : modifie le nom correspondant à l'ID
app.put("/students/:id", function(req, res){
    var id = req.params.id;
    var newName = req.body.name;
    connection.query("UPDATE students SET name = '" + newName + "' WHERE id = " + id, function(){
        res.json({success:true});
    });
});

// indication : app.put("/students/:id", function (....)


console.log("Serveur started on 8000");
app.listen(3000);




