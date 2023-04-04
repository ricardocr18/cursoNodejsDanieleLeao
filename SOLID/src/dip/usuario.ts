import { IUsuario } from "./usuario.interface";
import { UsuarionMySQL } from "./usuario.mysql";
import { UsuarioPostgres } from "./usuario.postgres";

export class Usuario{
    constructor(private usuarioDoBanco: IUsuario){}
    criacao(nome: string, idade: number){
        this.usuarioDoBanco.criar(nome, idade)        
    }
}

const usuárioMysql = new UsuarionMySQL()
const usuarioPostgres = new UsuarioPostgres()

const usuario = new Usuario(usuarioPostgres)