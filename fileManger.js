var fs = require('fs');

fs.readFile('data.txt', function (error, content) {
    var data = content.toString();
//   console.log(content.toString().charAt(0) == "l" ? content.toString() : "ko");
    var lines = data.split("\n");
    var lineL = lines.length;
//    lines.filter(firstIsL(lines, lineL));
    for (var i = 0; i < lineL; i++){
        if(lines[i].charAt(0) == 'l'){
            console.log(lines[i]);
        }
    }
});

function firstIsL(datas, length) {
    for (var i = 0; i < length; i++) {
        if (datas[i].charAt(0) == 'l') {
            console.log(datas[i]);
        }
    }
}