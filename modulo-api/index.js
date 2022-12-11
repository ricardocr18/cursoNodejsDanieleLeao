const http = require("http");
const { randomUUID } = require("crypto"); //Aqui criei uma função para usar na criação de numeros randomicos



let users = []
const server = http.createServer((request, response)=> {
    //cadastro de usuário

    const METHOD = request.method;
    if(METHOD === 'POST'){

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

    //GET - Listar todods os usuário
    //POS - Inseriri os usuário
    //PUT - Alterar um usuário
    //Delete - Remover um usuário



});

server.listen(3000, () => console.log("Servidor está no AR"))