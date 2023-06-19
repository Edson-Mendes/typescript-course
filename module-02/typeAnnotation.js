"use strict";
// Variávies simples
let nome = "Edson Mendes";
console.log(nome);
// Arrays
let animais = ["Gato", "Cachorro", "Macaco", "Panda"];
console.log(animais);
// Objeto
let car;
car = { nome: "Toyota Yaris Sedan XS", ano: 2019, preco: 80000 };
console.log(car);
// Função
function multiplicarNumeros(num1, num2) {
    return num1 * num2;
}
const multiplicarNumeros2 = (num1, num2) => {
    return num1 * num2;
};
console.log(multiplicarNumeros(2, 6));
console.log(multiplicarNumeros2(2, 6));
