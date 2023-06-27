export {};

// Exemplo 1:
interface Pessoa {
  nome: string;
  idade: number;
}

const filterByIdadeMaiorQue = <T extends Pessoa>(
  pessoas: T[],
  idade: number,
) => {
  return pessoas.filter((p) => p.idade >= idade);
};

const pessoas: Pessoa[] = [
  { nome: 'Edson', idade: 29 },
  { nome: 'Débora', idade: 27 },
  { nome: 'Kira', idade: 6 },
  { nome: 'Mei', idade: 6 },
];

console.log(filterByIdadeMaiorQue(pessoas, 28));

// ---------------------------------------------------------
// Exemplo 2:
const combinarObjetos = <U extends object, V extends object>(
  object1: U,
  object2: V,
) => {
  return {
    ...object1,
    ...object2,
  };
};

const empresa = {
  cnpj: '1234.5678.8900.1234',
};

const funcionario = {
  nome: 'Lorem',
  cargo: 'Desenvolvedor Web Backend',
};

console.log('Empresa:', empresa);
console.log('Funcionario:', funcionario);
console.log('Info: ', combinarObjetos(empresa, funcionario));
