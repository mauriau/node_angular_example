// transformer le code
// pour que notre programme observe le contenu du repertoire /datas
// dès qu'un fichier y est copié
// le fichier est chargé à la facon du fichier data.txt
// une fois que le traitement est terminé
// supprimer le fichier

// indication : utilise le module "chokidar"


var fs = require('fs');

fs.readFile("data.txt", 'utf8', function(error, data){
   
    if (error)
    {
        console.log(error);
        return;
    }
    
    var content = data;
    
    var users = content.split("\n");
    
    for (var i = 0; i < users.length; i++ )
    {
        var user = users[i];
        
        if (user.charAt(0) == "L")
            console.log( user );
    }
    
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < letters.length; i++)
    {
        var letter = letters[i];
        
        var str = "";
        
        for (var j = 0; j < users.length; j++ )
        {
            var user = users[j];

            if (user.charAt(0) == letter)
            {
                str += user + "\n";
            }
        }
        
        fs.writeFile(letter + ".txt", str, 'utf8', function(error){
            
        });
    }
    
});

