import { Arquivo } from "./arquivo";

export class ArquivoCSV implements Arquivo{
    parse(pathDoArquivo: string): string{
        console.log('Implementando CSV ' + pathDoArquivo)
        return "Implementando CSV"
    }
}