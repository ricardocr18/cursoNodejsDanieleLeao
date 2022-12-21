const http = require("http");
const handler = require("./handlerRoutes");

const server = http.createServer(handler) 

server.listen(3000, () => console.log("Servidor está no AR"))

//caso acorra agum erro dentro do código será tratado aqui
process.on("uncaughtException", (err) =>
    console.log(`Erro no servidor ${err}`)
)