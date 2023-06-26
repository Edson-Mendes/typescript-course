export {};

// Exemplo 1:
interface IEndereco {
  cep: string;
  rua: string;
  numero: number;
}

interface IPessoa {
  cpf: string;
  nome: string;
}

interface IInfo extends IEndereco, IPessoa {}

type Info = IEndereco & IPessoa;

const edson: Info = {
  cpf: '555-555-555-55',
  nome: 'Lorem Ipsum',
  cep: '99.999-999',
  rua: 'Rua A',
  numero: 100,
};
