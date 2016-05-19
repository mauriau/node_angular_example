
var fs = require("fs");
var chokidar = require('chokidar');

var conn = require('./connection');

var connection = conn.connection;

process.on('SIGINT', function(){
    console.log("bye bye");
    connection.end();
    process.exit();
});

connection.connect();

console.log("Connecté à la base !");

conn.getUsers( function(users){
    
    console.log(users);
});

//connection.end();

//connection.query("create database esgi");
//var str = "CREATE TABLE `names` ( `id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(256) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;";

/*connection.query("SELECT * FROM students", function(error, rows){
    
    if (error)
    {
        console.log(error);
        return;
    }
    
    console.log(rows);
    
});*/


var watcher = chokidar.watch('datas', {ignored: /[\/\\]\./});

watcher.on('add', parseFile);

function parseFile(file)
{
    console.log("Fichier ajouté : " + file);
    fs.readFile(file, 'utf8', function(error, data){
        
        // unlink
        fs.unlink(file);
        
        if (error)
        {
            console.log(error);
            return;
        }

        var content = data;
     
        var users = content.split("\n");

        for (var j = 0; j < users.length; j++ )
        {
            var user = users[j];
            console.log("Insertion dans la base de : " + user);
            
            //connection.connect();
            
            addUser(user);
           
            
            //connection.end();
        }
        

    });
}


function addUser(user)
{
    connection.query("SELECT * from names WHERE name = '" + user + "'",     function(error, rows){
        
        console.log(rows);
        
        if (rows.length == 0)  
            connection.query("INSERT INTO names (name) VALUES ('" + user + "' )"); 
        
    });
            
}

//  créer une table names
// en se basant sur l'exercice 4, 
// à chaque fois qu'un fichier est copié dans le répertoire datas
// il est chargé
// tous les prénoms contenu dans le fichier
// sont ajouté dans la table names s'il n'y sont pas déjà







