const http = require("http");
const server = http.createServer((request, response)=> {

    const result = {
        message: "minha primeira resposta"
    }

        response.writeHead(201, {
            'Content-type': 'application/json'
        })

    response.write(JSON.stringify(result))
    response.end()
});

server.listen(3000, () => console.log("Servidor está no AR"))