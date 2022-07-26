const fs = require('fs');
const http = require('http');
const _ = require('lodash');

const server = http.createServer((request,result) => {
    // console.log(request.url,request.method);

    const num = _.random(0,20);
    console.log(num);
    
    
    const greet = _.once(() => {
        console.log('hellooo');
    });

    greet();
    greet();

    // set header content type
    result.setHeader('Content-Type', 'text/html');

    let path = './views/';

    switch (request.url) {
        case '/':
            path += 'index.html'
            result.statusCode = 200;
            break;
        case '/about':
            path += 'about.html'
            result.statusCode = 200;
            break;
        case '/about-me':
            result.statusCode = 301;
            result.setHeader('Location' , '/about');
            result.end();
            break;
        default:
            path += '404.html'
            result.statusCode = 404;
            break;
    }




    fs.readFile(path, (err,data) => {
        if (err) {
            console.log(err);
            result.end();
        }else{
            // result.write(data);
            result.end(data);
        }
    })


    // result.write('helloooo niggas');
    // result.end();
})

server.listen(3000,'localhost',() => {
    console.log('listening for requests on port 3000');
})

