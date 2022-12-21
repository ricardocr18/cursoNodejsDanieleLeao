const user = require("../user")

class UserController {

    async post(request, response) {
        const { body } = request;
        const result = await user.create(body)
        return response.end(JSON.stringify(result))

    }

    async get(request, response) {
        const result = await user.findAll() //aqui está fazendo referencia ao que está no arquivo users.js
        return response.end(JSON.stringify(result))
    }

    async put(request, response) {

        /* Aqui era a forma antiga de pegar o numero do id para fazermos a pesquisa, depois que criamos o objeto na linha 29 no arquivo handlerRouter, não foi necessario usar essa formula, usamos a de baixo

        const URL = request.url
        //capturar o ID do usuário para podermos efetuar a alteração
        const paramSplit = URL.split("/"); //aqui vou dividir a URL que está em postman em / e abaixo só pego a posição 2 do meu array
        const id = paramSplit[2]

        */

        const { id } = request.params //Aqui estou fazendo uma desestruturação do meu id
        const { body } = request

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
    }
}

module.exports = { UserController }