export { };

// Exemplo 1:
function somarNumeros(numero: number, ...numeros: number[]):number {
    let total: number = 0;
    for (const value of numeros) {
        total += value;
    }
    return total;
}

console.log(somarNumeros(1, 0.1));

// Exemplo 2:
function listarFrutas(frase: string, ...frutas: string[]): string {
    return `${frase} ${frutas.join(', ')}.`
}

console.log(listarFrutas('As Frutas são:', 'Banana', 'Maça', 'Bergamota'));
