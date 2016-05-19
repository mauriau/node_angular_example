
// transformer le code
// pour que notre programme observe le contenu du repertoire /datas
// dès qu'un fichier y est copié
// le fichier est chargé à la facon du fichier data.txt
// une fois que le traitement est terminé
// supprimer le fichier

// indication : utilise le module "chokidar"


var fs = require('fs');

var chokidar = require('chokidar');

var watcher = chokidar.watch('datas', {ignored: /[\/\\]\./});

watcher.on('add', parseFile);

var folderCreated = false;

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

            console.log("When looping : " + letter);
            
        
            manageFile(letter, str);
            
        }

    });
}


function manageFile(letter, str)
{
    fs.stat("generated", function(error, stats){
   if (error)
   {
       if (!folderCreated)
        {
            fs.mkdir("generated", function(){
                console.log("folder created");

            });
        }

       folderCreated = true;

       console.log("When creating file : " + letter);

        fs.writeFile("generated/" + letter + ".txt", str, 'utf8' );
   }
});

}
