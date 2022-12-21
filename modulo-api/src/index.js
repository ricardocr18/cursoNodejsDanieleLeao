const http = require("http");
const { UserController } = require("./controllers/user.controller");
const userController = new UserController //aqui eu estancie

const server = http.createServer((request, response) => {
   
    const METHOD = request.method;
    const URL = request.url

    if (URL.startsWith("/users")) {  //aqui uso o startsWith que vai pegar tudo que venha do /users em diante
        //POS - Inserir os usuário        
        if (METHOD === 'POST') {
            return userController.post(request, response) 
        }

        //GET - Listar todods os usuário
        if (METHOD === 'GET') {
            return userController.get(request, response)             
        }

        //PUT - Alterar um usuário
        if (METHOD === "PUT") {
            return userController.put(request, response)                             
        }
    } 
});

server.listen(3000, () => console.log("Servidor está no AR"))

//caso acorra agum erro dentro do código será tratado aqui
process.on("uncaughtException", (err) =>
    console.log(`Erro no servidor ${err}`)
)