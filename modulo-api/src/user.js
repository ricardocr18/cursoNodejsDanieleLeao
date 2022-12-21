const UserRepository = require("./repositories/user.repository");
const { createHmac } = require("crypto")

class User {
    constructor() {
        this.users = []
        this.userRepository = new UserRepository();
    }

    async create(body) {
        //Nessas duas linhas são da documentação do NodeJS sobre cryptografia
        const { password } = body
        const pwdEncrypt = createHmac('sha256', password).digest('hex');

        let user = {
            ...body,
            password: pwdEncrypt,
        };

        user = await this.userRepository.create(user);
        return user;
    }
    
    async findAll(){
        return this.userRepository.findAll();
    }

    async update(body, id){
        const userExists = await this.userRepository.findById(id); 
        
        //aqui faço uma tratativa de erro quando não encontramos o ID do usuário para fazermos as alterações
        if (!userExists) {
           throw new Error('Usuário não encontrado')
        }

        //Nessas duas linhas são da documentação do NodeJS sobre cryptografia
        const { password } = body
        const pwdEncrypt = createHmac('sha256', password).digest('hex')

        const user = {
            ...body,
            password: pwdEncrypt
        }
        
        await this.userRepository.update(user, id);
    }
}

module.exports = new User();