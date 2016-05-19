// exemple de code pour créer une file d'attente
// et extraire les tags ID3 les uns après les autres
// avec un délai de 100ms entre chaque traitement
// pour éviter une erreur de lecture

var files = [];
var extracting = false;
function addFileToExtract(path)
{
    files.push(path);
    console.log(files);
    extract();
}

function extract(){
{
        if (extracting || files.length == 0)
            return;
        
        extracting = true;
        
        path = files.pop();
        
        console.log("Extracting : " + path);
        id3({ file: path, type: id3.OPEN_LOCAL }, function(err, tags){

            if (err){
                 console.log(err);
                 return;
            }
             
            console.log(tags.album);
             
            console.log("Extracted " + path);
            
            
             extracting = false;
             
             setTimeout(extract, 100);
         });
}


