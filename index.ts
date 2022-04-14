console.log("===============Exercise 1.0================");

let pi = 3.14159;
let tau = pi * 2;
console.log("[Exercise 1.0]", `${tau} is ${pi} times two.`);

console.log("===============Exercise 1.1================");
let pie: string;
pie = "blueberry";
console.log("[Exercise 1.1]", `I like to eat ${pie}-flavored pie.`);

console.log("===============Exercise 1.2================");

let isMark: boolean;
isMark = true;
console.log("[Exercise 1.2]", `${isMark ? "Oh, hi Mark" : "Who are you?"}`);

console.log("===============Exercise 1.3================");
const integer: number = 6;
const float: number = 6.66;
const hex = 0xf00d;
const binary = 0b1010011010;
const octal = 0o744;
const negZero: number = -0;
const actuallyNumber: number = NaN;
const largestNumber: number = Number.MAX_VALUE;
const mostBiglyNumber: number = Infinity;

// I can change any to number then member[0] can not get the string value in line 42
const members: any[] = [
  integer,
  float,
  hex,
  binary,
  octal,
  negZero,
  actuallyNumber,
  largestNumber,
  mostBiglyNumber,
];

members[0] = "12345";

console.log("[Exercise 1.3]", members);

console.log("===============Exercise 1.4================");

// const sequence = Array.from(Array(10).keys());    Array is not working as a type of ArrayConstructor so I changed first array

const sequence: number[] = [1, 2, 3];
const animals: string[] = ["pangolin", "aardvark", "echidna", "binturong"];
const stringsAndNumbers: (string | number)[] = [1, "one", 2, "two", 3, "three"];
const allMyArrays: (string | number)[][] = [
  sequence,
  animals,
  stringsAndNumbers,
];

console.log("Exercise 1.4", allMyArrays);

console.log("===============Exercise 1.5================");
const inventoryItem = ["fidget wibbit", 11];

// later we destructure it
const [name1, qty] = inventoryItem;

const msg = addInventory(name1, qty);

console.log("[Exercise 1.5]", msg);

function addInventory(
  name1: number | string,
  quantity: number | string
): string {
  return `Added ${quantity} ${name1}s to inventory.`;
}
