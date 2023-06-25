export {};

// Exemplo 1:
interface Pessoa {
  nome: string;
  sobrenome: string;
  idade: number;
}

const showInfo = (pessoa: Pessoa): void => {
  console.log(
    `${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade} anos de idade.`,
  );
};

showInfo({ nome: 'Edson', sobrenome: 'Mendes', idade: 29 });

// -----------------------------------------------------------
// Exemplo 2:
interface Livro {
  autor: string;
  titulo: string;
  paginas?: number;
}

const effectiveJava = {
  autor: 'Joshua Bloch',
  titulo: 'Effective Java',
};

const cleanCode = {
  autor: 'Robert C. Martin',
  titulo: 'Clean Code',
  paginas: 400,
};

console.log(effectiveJava);
console.log(cleanCode);

// -----------------------------------------------------------
// Exemplo 3:
class Aluno {
  nome: string;
  sobrenome: string;
  idade: number;
  curso: string;

  constructor(nome: string, sobrenome: string, idade: number, curso: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.curso = curso;
  }

  showAlunoInfo(): void {
    console.log(
      `${this.nome} ${this.sobrenome}, idade: ${this.idade}, curso: ${this.curso}`,
    );
  }
}

const edson = new Aluno('Edson', 'Mendes', 29, 'Eng. da Computação');

edson.showAlunoInfo();
showInfo(edson);

// -----------------------------------------------------------
// Exemplo 4:

interface IAnimal {
  peso: number;
  patas: number;

  comer(): string;
  sound(): string;
}

class Gato implements IAnimal {
  peso: number;
  patas: number;
  cor: string;

  constructor(peso: number, patas: number, cor: string) {
    this.peso = peso;
    this.patas = patas;
    this.cor = cor;
  }

  comer(): string {
    return 'nhoc nhoc';
  }

  sound(): string {
    return 'Miau';
  }
}

const mei = new Gato(5.0, 4, 'branco e cinza');

console.log(mei.comer());
console.log(mei.sound());

// -----------------------------------------------------------
// Exemplo 5:

interface IFuncionario {
  id: number;
  nome: string;
  cargo: string;

  showInfo(): string;
}

type Funcionario = {
  id: number;
  nome: string;
  cargo: string;

  showInfo(): string;
};

// -----------------------------------------------------------
// Exemplo 6:
interface ICachorro {
  idade: number;
}

interface ICachorro {
  cor: string;
}

class Cachorro implements ICachorro {
  idade: number;
  cor: string;
}
