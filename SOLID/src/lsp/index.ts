import { Arquivo} from "./arquivo";
import { ArquivoCSV } from "./arquivo-csv";
import { ArquivoJSON } from "./arquivo-json";

const arquivoCSV = new ArquivoJSON()
arquivoCSV.parse('/pathDoArquivo')