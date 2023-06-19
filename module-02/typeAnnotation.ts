// Variávies simples
let nome: string = "Edson Mendes";
console.log(nome);

// Arrays
let animais: string[] = ["Gato", "Cachorro", "Macaco", "Panda"];
console.log(animais);

// Objeto
let car: {
  nome: string;
  ano: number;
  preco: number;
};
car = { nome: "Toyota Yaris Sedan XS", ano: 2019, preco: 80000 };
console.log(car);

// Função
function multiplicarNumeros(num1: number, num2: number): number {
  return num1 * num2;
}
const multiplicarNumeros2 = (num1: number, num2: number): number => {
  return num1 * num2;
};

console.log(multiplicarNumeros(2, 6));
console.log(multiplicarNumeros2(2, 6));
