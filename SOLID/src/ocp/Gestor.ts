import { Funcionario} from "./Funcionario";

export class Gestor extends Funcionario {
  calcularSalario(): number {
    const total = this.salario * 22 + 1000;
    return total;
  }
}