export {};

// Exemplo 1:
class Pessoa {
  nome: string;
  sobrenome: string;

  constructor(nome: string, sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa1: Pessoa = new Pessoa('Edson', 'Mendes');

console.log(pessoa1.nomeCompleto());

// Exemplo 2:
class Estudante {
  codigoEstudante: number;
  nome: string;
}

const estudante1 = new Estudante();

estudante1.codigoEstudante = 556677;
estudante1.nome = 'Edson Mendes';

console.log('Código do estudante ' + estudante1.codigoEstudante);
console.log('Nome do estudante ' + estudante1.nome);
