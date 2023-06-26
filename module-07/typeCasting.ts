export {};

// Exemplo 1:
let name: unknown = 'Lorem Ipsum';

console.log((name as string).length);

// Exemplo 2:
const carro = 'Corolla';

let length: number = (<string>carro).length;

console.log(length);
