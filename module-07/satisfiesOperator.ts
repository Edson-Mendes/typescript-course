export {};

// Exemplo 1:

type Cidade = NomeCidade | CidadeCoordenadas;

type NomeCidade =
  | 'São Paulo'
  | 'Cuiaba'
  | 'Porto Alegre'
  | 'Rio de Janeiro'
  | 'Diamantino';

type CidadeCoordenadas = {
  lat: number;
  long: number;
};

type Pessoa = {
  cidadeNatal: Cidade;
  cidadeResidencia: Cidade;
};

const pessoa1 = {
  cidadeNatal: 'Diamantino',
  // cidadeResidencia: { lat: 123, long: 312 },
  cidadeResidencia: 'Porto Alegre',
} satisfies Pessoa;

const pessoa2 = {
  cidadeNatal: 'Diamantino',
  cidadeResidencia: 'Porto Alegre',
} satisfies Pessoa;

console.log(pessoa1.cidadeNatal.toUpperCase());
console.log(pessoa1.cidadeResidencia.toUpperCase());

console.log(pessoa2.cidadeNatal.toUpperCase());
console.log(pessoa2.cidadeResidencia.toUpperCase());
