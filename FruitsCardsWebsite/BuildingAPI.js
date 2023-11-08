const fs = require('fs')
const http = require('http')
const url = require('url')
const temp_card = fs.readFileSync(`${__dirname}/templates/templates-card.html`,'utf-8');
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8');

//json file code
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataObject = JSON.parse(data);


const replaceTemplates = (temp,product)=>{
    let output = temp.replace( /{%PRODUCTNAME%}/g,product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);

    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g,'not-organic') 

    return output;

}


const server= http.createServer((req,res)=>{

    const { query, pathname } = url.parse(req.url,true);
    
    //HOME page
    if(pathname === '/' || pathname === '/overview')
    {
        res.writeHead(200,{
            'Content-type':'text/html'
        })
        const cards = dataObject.map(el=>
             replaceTemplates(temp_card,el)
        ).join('')
        const output1 = tempOverview.replace(`{%PRODUCT_CARDS%}`,cards);
         

        // console.log(cards) 
        res.end(output1)
        
        
    }
    else if(pathname === '/product')
    {
        //product page
        res.writeHead(200,{
            'Content-type':'text/html'
        })

        const product = dataObject[query.id];
        const output = replaceTemplates(tempProduct,product);
        res.end(output);
        // res.end(tempProduct);
    }
    else if(pathname === '/api')
    {
        // API PAGE
        res.writeHead(200,{
            'Content-type':'text/html'
        })
        res.end(temp_card)

    }
    else{
        // not found PAGE
        res.end("Page is not found")
    }
})

server.listen(8000, '127.0.0.1',()=>{
    console.log("request is listening! ")
})