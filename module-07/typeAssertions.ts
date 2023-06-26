export {};

// Exemplo 1:
function exibirPrecoFinal(
  preco: number,
  desconto: number,
  formato: boolean,
): number | string {
  const precoComDesconto = preco * (1 - desconto);

  return formato ? `${precoComDesconto}` : precoComDesconto;
}

console.log(
  typeof exibirPrecoFinal(123, 0.23, true),
  ' - ',
  exibirPrecoFinal(123, 0.23, true),
);
console.log(
  typeof exibirPrecoFinal(123, 0.23, false),
  ' - ',
  exibirPrecoFinal(123, 0.23, false),
);

const value = <number>exibirPrecoFinal(123, 0.23, true);
console.log(typeof value, ' - ', value);

// Exemplo 2:
type Humano = {
  nome: string;
  id: number;
  dataNascimento: Date;
};

const humano1 = {
  id: 123,
  dataNascimento: new Date('2023-06-28'),
};

const humano2: Humano = humano1 as Humano;

const showInfo = (humano: Humano) => {
  console.log(
    `Id: ${humano.id} - Nome: ${humano.nome.toUpperCase()} --- Nascimento: ${
      humano.dataNascimento
    }`,
  );
};

showInfo(humano2); //Causa Exception pq humano2 não possui o campo 'nome'.
