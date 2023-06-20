// Arrays com colchetes
let nameArray: string[] = ["Edson", "Mei", `Kira`, "Débora"];
console.log(nameArray);
console.log(nameArray[7]);
nameArray[4] = "Feijão";
nameArray[5] = "Sofi";
nameArray[6] = "Luna";
nameArray[7] = "Mila";
console.log(nameArray[7]);
console.log("----------------------------------------------");

// Arrays objects
let nameArrayObject: Array<string> = ["Edson", "Mei", `Kira`, "Débora"];
console.log(`Array: ${nameArrayObject}`);
nameArrayObject.push("Feijão");
console.log(`Array: ${nameArrayObject}`);
let namePoped: string | undefined = nameArrayObject.pop();
console.log(`Array: ${nameArrayObject}`);
console.log(`Array length: ${nameArrayObject.length}`);
console.log(`Name poped: ${namePoped}`);

nameArrayObject.sort((a, b) => a.length - b.length);
console.log(`Sorted Array: ${nameArrayObject}`);
console.log("----------------------------------------------");

// Spread operator
let zeroToThree: number[] = [0, 1, 2, 3];
let zeroToTen: number[] = [...zeroToThree, 4, 5, 6, 7, 8, 9, 10];
let crazy: number[] = [-3, -2, -1, ...zeroToThree, 4, 5, 6, 7, 8];

console.log(zeroToThree);
console.log(zeroToTen);
console.log(crazy);

// Iteração sobre array
let animalsArray: string[] = new Array(
  "gato",
  "rato",
  "cachorro",
  "macaco",
  "coruja",
  "cavalo"
);

const show = (value: string) => console.log(value);

function showFunction(value: string) {
  console.log(`value: ${value}`);
}

animalsArray.forEach(show);
console.log("-------------------------------------");
animalsArray.forEach(showFunction);

for (const element of animalsArray) {
  console.log(element);
}
