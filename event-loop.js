const fs = require('fs');


setTimeout(()=>{
    console.log("Timeout")
}, 0);

setImmediate(()=>{
    console.log("Immediate Timeout")});


fs.readFile('text-file.txt', function(){
    console.log("Text File");
})

