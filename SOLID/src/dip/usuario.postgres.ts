import { IUsuario } from "./usuario.interface";

export class UsuarioPostgres implements IUsuario{
        criar(nome: string, idade: number): void {
        console.log('Aqui vai a implementação do postgres', name, idade)
    }
}