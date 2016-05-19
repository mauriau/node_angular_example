var mysql = require("mysql");

var connection = mysql.createConnection({

    host : "localhost",
    user : "root",
    password : "root",
    database : "esgi"
});


connection.connect();

console.log("Connecté à la base !");

//connection.query("create database esgi");
//var str = "CREATE TABLE IF NOT EXISTS `students` (";
//str += "`id` int(11) NOT NULL,";
//str += "`name` varchar(256) NOT NULL,";
//str += "`age` int(11) NOT NULL";
//str += ") ENGINE=InnoDB DEFAULT CHARSET=latn1;";
//str += "ALTER TABLE `students`";
//str += "  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;";
//connection.query("INSERT INTO students (name, age) VALUES ('James', 14)");
//connection.query("INSERT INTO students (name, age) VALUES ('Wendy', 16)");
//connection.query("INSERT INTO students (name, age) VALUES ('Rocky', 13)");
//
connection.query("SELECT * FROM students", function(error, rows){
    
    if (error)
    {
        console.log(error);
        return;
    }
    
    console.log(rows);
    
});

connection.end();


//  créer une table names
// en se basant sur l'exercice 4, 
// à chaque fois qu'un fichier est copié dans le répertoire datas
// il est chargé
// tous les prénoms contenu dans le fichier
// sont ajouté dans la table names s'il n'y sont pas déjà







