const http = require("http");
const server = http.createServer((request, response)=> {
    response.write("minha primeira resposta")
    response.end()
});



server.listen(3000, () => console.log("Servidor está no AR"))