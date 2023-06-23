export { };
// Exemplo 1: Named Function
function somarNumeros(operadorA: number, operadorB: number): number {
    return operadorA + operadorB;
}

console.log(somarNumeros(5, 9));

// Exemplo 2: Anonymous Function
const saudar = function (message:string) {
    console.log(message);
}

saudar('Hello world!');

// Exemplo 3: Arrow Function
const saudar02 = (message: string) => console.log(message);

saudar02('Hi mom!');

// Exemplo 4: Function constructor
const saudar03 = new Function('message', 'return message');

console.log(saudar03('Hey friend!'));
