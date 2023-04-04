// OCP - Um artefato de software deve ser aberto para extensão, mas fechado para modificação

export abstract class Funcionario {
  nome: string;
  salario: number;
  
  constructor(nome: string, salario: number) {
    this.nome = nome;
    this.salario = salario;    
  }

  abstract calcularSalario(): number
}
