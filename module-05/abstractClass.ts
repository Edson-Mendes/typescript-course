export {};

// Exemplo 1:
abstract class Funcionario {
  constructor(private id: number, private nome: string) {
    this.id = id;
    this.nome = nome;
  }

  abstract calcularSalario(): number;

  info(): string {
    return `${this.id} - ${this.nome}`;
  }
}

class FuncionarioCLT extends Funcionario {
  constructor(private salario: number, id: number, nome: string) {
    super(id, nome);
    this.salario = salario;
  }

  calcularSalario(): number {
    return this.salario - this.salario * 0.1;
  }
}

const funcionario = new FuncionarioCLT(5000, 123456, 'Edson Mendes');

console.log(funcionario.info());
console.log(funcionario.calcularSalario());
