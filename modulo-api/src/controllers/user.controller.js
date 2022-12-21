// AQui tremos cadastro de usuário a busca de usuário e alteração do usuário

const user = require("../user")

class UserController {

    async post(request, response) {
        const { body } = request.body
        const result = await user.create(body)
        return response.end(JSON.stringify(result))
    }


    async get(request, response) {
        const result = await user.findAll(); //aqui está fazendo referencia ao que está no arquivo users.js
        return response.end(JSON.stringify(result))
    }

    async put(request, response) {
        const { id } = request.params;
        const { body } = request;
        console.log(body)

        try {
            await user.update(body, id);
            return response.end(
                JSON.stringify({
                    message: "Usuário alterado com sucesso"
                })
            );
        } catch (err) {
            console.log("error ", err);
            return response.end(JSON.stringify({
                //message: "Usuário não encontrado!"
                message: err.message,
            })
            )
        }

    }
}

module.exports = { UserController }