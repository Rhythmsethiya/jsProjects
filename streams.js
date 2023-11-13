const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on('request',(req,res)=>
{
//     //solution1
//     fs.readFile('text-file.txt',(err,data)=>{
//         res.end(data);
//     })

            //solution 2 
        //as we assign the values of the huge  text file  to the data variable 
        // so we have to use another solution 
        // const readable = fs.createReadStream('texttt-file.txt')
        // readable.on('data',chunk=>{
        //     res.write(chunk);  
        // })

        // // readable.on('end',()=>{
        // //     res.end();
        // // })

        // readable.on('error',err=>{
        //     res.statusCode = 500;

        //     console.log(err);
        //     res.end();
        // })



        // Solution3 
        const readable = fs.createReadStream('text-file.txt')
        readable.pipe(res);
        // readableSource.pipe(res);
})  





server.listen(3000,()=>{
    console.log("hello")
});