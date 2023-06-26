export {};

//Exemplo 1: typeof
let numero: number = 1000;
let nome: string = 'Lorem Ipsun';

console.log(typeof numero === 'number');
console.log(typeof nome === 'string');

// ------------------------------------------------------
// Exemplo 2: instanceof

class Car {
  constructor(private marca: string, private modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
  }
}

const gol = new Car('Volkswagen', 'Gol');

console.log(gol instanceof Car);

// ------------------------------------------------------
// Exemplo 3:

interface Animal {
  grupo: string;
}

class Peixe implements Animal {
  grupo: string;
  corPeixe: string;

  constructor(grupo: string, corPeixe: string) {
    this.grupo = grupo;
    this.corPeixe = corPeixe;
  }
}

class Passaro implements Animal {
  grupo: string;
  corPena: string;

  constructor(grupo: string, corPena: string) {
    this.grupo = grupo;
    this.corPena = corPena;
  }
}

const showCor = (animal: Animal) => {
  if ('corPeixe' in animal) console.log('É um peixe');
  if ('corPena' in animal) console.log('É um passaro');
};

const peixe = new Peixe('Peixes', 'Cinza');
const passaro = new Passaro('Passaros', 'Azul');

showCor(peixe);
showCor(passaro);
