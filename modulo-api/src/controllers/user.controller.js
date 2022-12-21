const user = require("../user")

class UserController {

    post(request, response) {
        request.on("data", async (data) => {
            const body = JSON.parse(data);
            const result = await user.create(body)
            return response.end(JSON.stringify(result))
        })
    }

    async get(request, response) {
        const result = await user.findAll() //aqui está fazendo referencia ao que está no arquivo users.js
        return response.end(JSON.stringify(result))
    }

    put(request, response) {
        const URL = request.url
        //capturar o ID do usuário para podermos efetuar a alteração
        const paramSplit = URL.split("/"); //aqui vou dividir a URL que está em postman em / e abaixo só pego a posição 2 do meu array
        const id = paramSplit[2]

        request.on("data", async (data) => {
            //receber as informaçõe que quero alterar do nosso body
            const body = JSON.parse(data);

            try {
                await user.update(body, id)
                return response.end(
                    JSON.stringify({
                        message: "usuário alterado com sucesso!"
                    })
                );
            } catch (err) {
                return response.end(
                    JSON.stringify({
                        message: err.message,  //aqui estamos pegando a mesagem de erro no arquivo user.js no throw new Error("Usuário não encontrado")
                    })
                )
            }

        })
    }

}

module.exports = { UserController }