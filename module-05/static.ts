export {};

// Exemplo 1:
class Funcionario {
  private static contratacoes = 0;

  constructor(private id: number, private nome: string) {
    this.id = id;
    this.nome = nome;
    Funcionario.contratacoes++;
  }

  public static totalContratacoes(): number {
    return Funcionario.contratacoes;
  }
}

console.log(Funcionario.totalContratacoes());
const funcionario1 = new Funcionario(123, 'Edson');
console.log(Funcionario.totalContratacoes());

const funcionario2 = new Funcionario(123, 'Edson');
console.log(Funcionario.totalContratacoes());
