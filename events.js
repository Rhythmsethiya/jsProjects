// const EventEmmitter = require('events');

// class Sales extends EventEmmitter{
//     constructor(){
//         super();
//     }

// }

// const myEmmitter = new Sales();

// myEmmitter.on('newSale', () => {
//     console.log("there was  a new sale");
// });

// myEmmitter.on('newSale', () => {
//     console.log("Customer name: Rhythm sethiya");
// });

// myEmmitter.on('newSale', stocks => {
//     console.log(`there was only ${stocks} new sales`);
// });

// myEmmitter.emit('newSale',9);


const http = require('http');
const server = http.createServer();
server.on('request',(req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
})

server.on('request',(req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log('another World\n');
})

server.listen(3000);
