const http = require("http");
const { randomUUID } = require("crypto"); //Aqui criei uma função para usar na criação de numeros randomicos
const { Client } = require("pg");
//const { networkInterfaces } = require("os");

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'Linux@31',
    database: 'modulo_api_cursos',
    port: 5432
})

client.connect();
client.query('SELECT NOW()', (err, res) => {
    console.log("Sucess", res);
    client.end()
})


let users = [] //estou salvado o nosso usuário em um array
const server = http.createServer((request, response) => {
    //cadastro de usuário

    const METHOD = request.method;
    const URL = request.url

    if (URL.startsWith("/users")) {  //aqui uso o startsWith que vai pegar tudo que venha do /users em diante
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
        //GET - Listar todods os usuário
        if (METHOD === 'GET') {
            return response.end(JSON.stringify(users))
        }

        //PUT - Alterar um usuário
        if (METHOD === "PUT") {
            //capturar o ID do usuário para podermos efetuar a alteração
            const paramSplit = URL.split("/"); //aqui vou dividir a URL que está em postman em / e abaixo só pego a posição 2 do meu array
            const id = paramSplit[2]

            request.on("data", (data) => {
                //receber as informaçõe que quero alterar do nosso body
                const body = JSON.parse(data);

                // identificar qual usuário dentro do array
                const userIndex = users.findIndex((user) => user.id === id);

                //tratativa de erro, quando não encontramos o usuário para alterar
                if (userIndex <= -1) {
                    return response.end(
                        JSON.stringify({
                            message: "Usuário não encontrado"
                        })
                    )
                }

                //alterar o usuário  (ID permanece)
                users[userIndex] = {
                    ...body,
                    id,
                };


            })
                .on("end", () => {
                    //retornar usuário alterado
                    return response.end(
                        JSON.stringify({
                            message: "usuário alterado com sucesso!"
                        })
                    );
                })

        }

    }


});

server.listen(3000, () => console.log("Servidor está no AR"))

//caso acorra agum erro dentro do código será tratado aqui
process.on("uncaughtException", (err) =>
    console.log(`Erro no servidor ${err}`)
)