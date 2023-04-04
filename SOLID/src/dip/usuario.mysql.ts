import { IUsuario } from "./usuario.interface";

export class UsuarionMySQL implements IUsuario{
    criar(nome: string, idade: number){
        // Salvar no meu banco de dados
        console.log('Implementar', nome, idade)
    }
}