// const http = require('http'); CommonJS => require
import http from 'node:http'; //Esmodules => import/export

// Stateful - Stateless

// Cabeçalhos (requisição/reposta) => Metadados

const users = []                 

const server = http.createServer((req, res) => {
    const {method, url} = req;

    if (method == 'GET' && url == '/users') {

        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users));
    }
    if (method == "POST" && url == "/users") {
      users.push({
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com'
      })
    }
    

    return res.end('Hello World Watch');
})

server.listen(3333);
