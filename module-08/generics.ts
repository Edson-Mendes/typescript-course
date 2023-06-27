export {};

// Exemplo 1:
const getItemAleatorio = <T>(itens: T[]): T => {
  let itemAleatorio = Math.floor(Math.random() * itens.length);

  return itens[itemAleatorio];
};

console.log(getItemAleatorio([12, 15, 16, 17, 19]));
console.log(getItemAleatorio(['12', '15', '16', '17', '19']));
console.log(getItemAleatorio([true, false, false, true, false]));
