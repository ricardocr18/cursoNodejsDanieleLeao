const http = require("http");
const server = http.createServer((request, response)=> {

    const result = {
        message: "minha primeira resposta"
    }

    response.statusCode = 201;
    response.setHeader("Content-type", "aplication/json");
    response.statusMessage = "Usuário salvo com sucesso"
        
    response.write(JSON.stringify(result))
    response.end()
});

server.listen(3000, () => console.log("Servidor está no AR"))