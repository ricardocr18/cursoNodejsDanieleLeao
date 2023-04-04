import { Funcionario } from "./Funcionario";
import { Gerente } from "./Gerente";
import { Gestor } from "./Gestor";

const funcionario1 = new Gestor("joão", 10000);
console.log(
  `Nome: ${funcionario1.nome}
   - Salário: ${funcionario1.calcularSalario()}`
);

const funcionario2 = new Gerente("Ricardo", 10000);
console.log(
  `Nome: ${funcionario2.nome}   
    - Salário: ${funcionario2.calcularSalario()}`
);

// const funcionario3 = new Funcionario("Maria", 10000);
// console.log(
//   `Nome: ${funcionario3.nome}
    
//     - Salário: ${funcionario3.calcularSalario()}`
// );
