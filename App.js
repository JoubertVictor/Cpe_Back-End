const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  if(req.url === "/cadastro"){

   res.end(JSON.stringify({
    data: 'Função Cadastro',
   }));

  }

  if(req.url === "/login"){

    res.end(JSON.stringify({
     data: 'Função Login',
    }));
 
   }

  res.end(JSON.stringify({
    data: 'Hello World!',
   }));

});

server.listen(8000, () => console.log("O servidor ta aberto, eu acho"));