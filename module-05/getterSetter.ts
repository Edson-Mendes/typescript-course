export {};

// Exemplo 1:
class Retangulo {
  private altura: number;
  private largura: number;

  constructor(altura: number, largura: number) {
    this.altura = altura;
    this.largura = largura;
  }

  public get area(): number {
    return this.altura * this.largura;
  }
}

const retangulo = new Retangulo(10, 20);

console.log(retangulo.area);

// Exemplo 2:
class Aluno {
  private name: string;
  private curso: string;

  constructor(name: string, curso: string) {
    this.name = name;
    this.curso = curso;
  }

  public get getName(): string {
    return this.name;
  }

  public get getCurso(): string {
    return this.curso;
  }

  public set setCurso(curso: string) {
    this.curso = curso;
  }
}

const aluno = new Aluno('Edson', 'Eng da Computação');

console.log(aluno.getName);
console.log(aluno.getCurso);

aluno.setCurso = 'Ciências da Computação';

console.log(aluno.getCurso);
