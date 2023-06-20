// Uso simples de Tuple
let pessoa: [string, string, number];
pessoa = ["Edson Mendes", "Backend Developer", 29];
console.log(pessoa);

// Tuplas com labels
let funcionario: [nome: string, cargo: string, idade: number];
funcionario = ["Edson Mendes", "Backend Developer", 29];
console.log(funcionario);
funcionario.push("xalala");
funcionario.push(1209102);
console.log(funcionario);

// Tuplas com spread operator
let frutaList: [string, ...string[]] = [
  "banana",
  "maça",
  "tomate",
  "laranja",
  "maracuja",
  "mamão",
];
console.log(frutaList);

// tuplas com dados heterogêneos
let fruteira: [number, ...string[]] = [frutaList.length, ...frutaList];
console.log(fruteira);

// tuplas em funções
function listarPessoas(nomes: string[], idades: number[]): void {
  if (nomes.length != idades.length)
    console.error(
      "Array de nomes e array de idades devem ter o mesmo tamanho!"
    );
  else
    for (let index = 0; index < nomes.length; index++) {
      console.log(`Nome: ${nomes[index]}, idade: ${idades[index]}`);
    }
}

let pessoas: [string, ...string[]] = ["Edson", "Débora", "Mei", "Kira"];
let idades: [number, ...number[]] = [29, 27, 6, 6];

listarPessoas(pessoas, idades);
