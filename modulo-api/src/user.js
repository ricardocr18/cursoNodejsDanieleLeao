const UserRepository = require("./repositories/user.repository");
const {creatHmac, createHmac, Hmac } = require("crypto") //usando para cryptografar a senha

class User {
    constructor(){
        this.users = []
        this.userRepository = new UserRepository()
    }

    async create(body){
        const user = await this.userRepository.create(body)
        return user;
    }

    
    async findAll(){
        return this.userRepository.findAll(); //aqui estou usando o findAll do arquivo user.repository para fazer a pesquisa no banco de dados do postgree
    }

    async update(body, id){
        const userExists = await this.usersRepository.findById(id)

         if (!userExists) {
             throw new Error("Usuário não encontrado!")
         }

         //aqui estou cryptografando a senha
         const { password } = body;
         const pwdEncrypt = createHmac("sha256", password).digest("hex");      

        
        await this.userRepository.update(body, id)        
    }
}

module.exports = new User()