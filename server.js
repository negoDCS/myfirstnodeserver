// ----- Import libraries -----

const moment = require('moment');
const http = require('http');

// ----- Define constants -----

const host = "localhost";
const port = 8080;

// Hora actual
let hora = moment().format('LTS');

/*
function sayHello() {
    console.log("ola k ase")
}

// Arrow function
const sayHello2 = () => {
    console.log("ola k ase 2")
}

sayHello();
sayHello2();
*/
//----- Create server -----

const server = http.createServer( (request, response) => {
    
    //console.log(request.url);
    
    if (request.url === "/") {

        // Http Headers
        response.writeHead(200, {
          'Content-Type' : 'text/html'
        });

        // Http Body
        response.write('<h1> Ya se Node </h1>');

        // Send http message
        response.end();

}else if (request.url === "/hw") {

    // Http Headers
    response.writeHead(200, {
      'Content-Type' : 'text/html'
    });

    // Http Body
    response.write('<p style="color: orange">Happy Halloween!</p>');

    // Send http message
    response.end();

}else if (request.url === "/myjson") {

    // Http Headers
    response.writeHead(200, {
      'Content-Type' : 'application/json'
    });

    // Http Body
    response.write({ "nombre": "Espagueti", "apellido": "Volador"});

    // Send http message
    response.end();

}else if(request.url === "/hora"){
    // Http Headers
    response.writeHead(200, {
        'Content-Type' : 'text/html'
      });

      // Http Body
      response.send(Hora);

      // Send http message
      response.end();
    }
    });


// ----- Start server -----

server.listen(port, host, () => {
console.log(`Server is running on http://${host}:${port}`);
});