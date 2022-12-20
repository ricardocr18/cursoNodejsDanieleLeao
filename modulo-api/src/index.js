const http = require("http");
const user = require('./user')

const server = http.createServer((request, response) => {
    //cadastro de usuário

    const METHOD = request.method;
    const URL = request.url

    if (URL.startsWith("/users")) {  //aqui uso o startsWith que vai pegar tudo que venha do /users em diante
        //POS - Inserir os usuário        
        if (METHOD === 'POST') {

            request.on("data", (data) => {
                const body = JSON.parse(data);
                const result = user.create(body)
                return response.end(JSON.stringify(result))
            })

        }
        //GET - Listar todods os usuário
        if (METHOD === 'GET') {
            const result = user.findAll()
            return response.end(JSON.stringify(result))
        }

        //PUT - Alterar um usuário
        if (METHOD === "PUT") {
            //capturar o ID do usuário para podermos efetuar a alteração
            const paramSplit = URL.split("/"); //aqui vou dividir a URL que está em postman em / e abaixo só pego a posição 2 do meu array
            const id = paramSplit[2]

            request.on("data", (data) => {
                //receber as informaçõe que quero alterar do nosso body
                const body = JSON.parse(data);

                try {
                    user.update(body, id)
                } catch (err) {
                    return response.end(
                        JSON.stringify({
                            message: err.message,  //aqui estamos pegando a mesagem de erro no arquivo user.js no throw new Error("Usuário não encontrado")
                        })
                    )
                }

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