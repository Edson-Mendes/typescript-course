export {};

// Exemplo 1:
interface Pair<T, U> {
  first: T;
  second: U;
}

const showPair = <T, U>(pair: Pair<T, U>) => {
  console.log(pair);
};

const pair1: Pair<string, number> = {
  first: 'Lorem',
  second: 123,
};

const pair2: Pair<boolean, Date> = {
  first: true,
  second: new Date('2023-06-27'),
};

showPair(pair1);
showPair(pair2);
