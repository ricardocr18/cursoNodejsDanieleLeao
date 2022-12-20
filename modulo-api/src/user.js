const { randomUUID } = require("crypto"); //Aqui criei uma função para usar na criação de numeros randomicos

class User {
    constructor(){
        this.users = []
    }

    create(body){
        const user = {
            ...body,
            id: randomUUID()
        }
        this.users.push(user);
        return user;
    }

    findAll(){
        return this.users
    }

    update(body, id){

         // identificar qual usuário dentro do array
         const userIndex = this.users.findIndex((user) => user.id === id);

         //tratativa de erro, quando não encontramos o usuário para alterar
         if (userIndex <= -1) {
             throw new Error("Usuário não encontrado")
         }

         //alterar o usuário  (ID permanece)
         this.users[userIndex] = {
             ...body,
             id,
         };
        
    }
}

module.exports = new User()