export {};

// Exemplo 1:
class Animal {
  mover(distancia = 0) {
    console.log(`Animal moveu-se ${distancia} metros!`);
  }
}

class Gato extends Animal {
  miar(): void {
    console.log('miau');
  }
}

const gato = new Gato();

gato.miar();
gato.mover(5);

// Exemplo 2:
class Pessoa {
  constructor(private nome: string, private sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }

  apresentarPessoa(): string {
    return `Oi, meu nome é ${this.nome}`;
  }
}

class Funcionario extends Pessoa {
  constructor(private cargo: string, nome: string, sobrenome: string) {
    super(nome, sobrenome);
    this.cargo = cargo;
  }

  public get getCargo(): string {
    return this.cargo;
  }
}

const funcionario = new Funcionario('Desenvolvedor web', 'Edson', 'Mendes');

console.log(funcionario.getCargo);
console.log(funcionario.apresentarPessoa());
console.log(funcionario.nomeCompleto());
console.log(typeof funcionario);
