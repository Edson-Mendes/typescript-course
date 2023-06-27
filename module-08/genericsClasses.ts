export {};

// Exemplo 1:
class Box<T> {
  private item: T;

  constructor(item: T) {
    this.item = item;
  }

  public get getItem(): T {
    return this.item;
  }

  public set setItem(item: T) {
    this.item = item;
  }
}

const stringBox = new Box<string>('Edson Mendes');
const numberBox = new Box<number>(666);

console.log(stringBox.getItem);
console.log(numberBox.getItem);
