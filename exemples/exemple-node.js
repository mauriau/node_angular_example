var fs = require('fs');

fs.readdir( "./", function(error, files){
    
    if (error)
        {
            console.log("Probleme !");
            return;
        }
   
    console.log(files);
});