export {};

interface IAnimal {
  especie: string;
}

interface IMamifero extends IAnimal {
  produzLeite: boolean;
}

class Gato implements IMamifero {
  especie: string;
  produzLeite: boolean = true;

  constructor(especie: string) {
    this.especie = especie;
  }
}

interface IReptil extends IAnimal {}

class Lagarto implements IReptil {
  especie: string;
  sangueFrio: boolean;

  constructor(especie: string) {
    this.especie = especie;
    this.sangueFrio = true;
  }
}

const info1 = (mamifero: IMamifero) => console.log('este é um mamífero');
const info2 = (animal: IAnimal) => console.log('este é um animal');
const info3 = (gato: Gato) => console.log('este é um gato');
const info4 = (lagarto: Lagarto) => console.log('este é um gato');

const gato = new Gato('gatineo');
const lagarto = new Lagarto('Lagartineo');

info1(gato);
info2(gato);
info3(gato);

// info1(lagarto); // lagarto não satisfaz IMamifero
info2(lagarto);
// info3(lagarto); // lagarto não satisfaz Gato
info4(lagarto);
