export {};

// Exemplo 1:
type Usuario = {
  id: number;
  nome: string;
  endereco: string;
  telefone: string;
  idade: number;
};

type UsuarioOpcional = {
  [P in keyof Usuario]?: Usuario[P];
};

type UsuarioSomenteLeitura = {
  readonly id: number;
  readonly nome: string;
  readonly endereco: string;
  readonly telefone: string;
  readonly idade: number;
};

const somenteLeitura: UsuarioSomenteLeitura = {
  id: 123,
  nome: 'Lorem Ipsum',
  endereco: 'rua xpto',
  telefone: '(xx) xxxxx-xxxx',
  idade: 29,
};

const opcional: UsuarioOpcional = {
  id: 123,
  nome: 'Dolor Sit',
};
