export {};

// Exemplo 1:
class Estudante {
  codigo: number;
  nome: string;
}

const estudante1 = new Estudante();

estudante1.codigo = 12345;
estudante1.nome = 'Edson Mendes';

console.log(estudante1.nome, estudante1.codigo);

// -----------------------------------------------------------
// Exemplo 2:
class Estudante02 {
  nome: string;
  codigo: number;
  private idade: number;

  constructor(nome: string, codigo: number, idade: number) {
    this.nome = nome;
    this.codigo = codigo;
    this.idade = idade;
  }

  toString(): string {
    return `Nome: ${this.nome} - Código: ${this.codigo} - Idade: ${this.idade}`;
  }
}

const estudante2 = new Estudante02('Edson Mendes', 12345, 29);

console.log(estudante2.toString());
// console.log(estudante2.idade); // campo privado.

// -----------------------------------------------------------
// Exemplo 3:

class Pessoa {
  protected nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  showName(): void {
    console.log('Pessoa: ' + this.nome);
  }
}

class Aluno extends Pessoa {
  codigo: number;

  constructor(nome: string, codigo: number) {
    super(nome);
    this.codigo = codigo;
  }

  showAllInfo(): void {
    console.log(`${this.nome} - ${this.codigo}`);
    super.showName();
  }

  showName(): void {
    console.log('Aluno: ' + this.nome);
  }
}

const aluno1 = new Aluno('Edson', 123456);

aluno1.showName();
aluno1.showAllInfo();
// let nomeAluno = aluno1.nome; // Campo protected.
