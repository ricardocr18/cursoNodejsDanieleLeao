const http = require("http");
const { randomUUID } = require("crypto"); //Aqui criei uma função para usar na criação de numeros randomicos

//GET - Listar todods os usuário
//PUT - Alterar um usuário
//Delete - Remover um usuário

let users = []
const server = http.createServer((request, response) => {
    //cadastro de usuário

    const METHOD = request.method;
    const URL = request.url

    if (URL === "/users") {
        //POS - Inserir os usuário
        
        if (METHOD === 'POST') {

            request.on("data", (data) => {
                const body = JSON.parse(data);
                const user = {
                    ...body,
                    id: randomUUID()
                }
                users.push(user)
                return response.end(JSON.stringify(user))
            })

        }
        if (METHOD === 'GET') {
            return response.end(JSON.stringify(users))
        }

    }


});

server.listen(3000, () => console.log("Servidor está no AR"))