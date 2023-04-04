import { Funcionario } from "./Funcionario";

export class Gerente extends Funcionario {
  calcularSalario(): number {
    const total = this.salario * 22 + 8000;
    return total;
  }
}
