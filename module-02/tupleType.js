"use strict";
// Uso simples de Tuple
let pessoa;
pessoa = ["Edson Mendes", "Backend Developer", 29];
console.log(pessoa);
// Tuplas com labels
let funcionario;
funcionario = ["Edson Mendes", "Backend Developer", 29];
console.log(funcionario);
funcionario.push("xalala");
funcionario.push(1209102);
console.log(funcionario);
// Tuplas com spread operator
let frutaList = [
    "banana",
    "maça",
    "tomate",
    "laranja",
    "maracuja",
    "mamão",
];
console.log(frutaList);
// tuplas com dados heterogêneos
let fruteira = [frutaList.length, ...frutaList];
console.log(fruteira);
// tuplas em funções
function listarPessoas(nomes, idades) {
    if (nomes.length != idades.length)
        console.error("Array de nomes e array de idades devem ter o mesmo tamanho!");
    else
        for (let index = 0; index < nomes.length; index++) {
            console.log(`Nome: ${nomes[index]}, idade: ${idades[index]}`);
        }
}
let pessoas = ["Edson", "Débora", "Mei", "Kira"];
let idades = [29, 27, 6, 6];
listarPessoas(pessoas, idades);
