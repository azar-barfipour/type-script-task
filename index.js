console.log("===============Exercise 1.0================");
var pi = 3.14159;
var tau = pi * 2;
console.log("[Exercise 1.0]", "".concat(tau, " is ").concat(pi, " times two."));
console.log("===============Exercise 1.1================");
var pie;
pie = "blueberry";
console.log("[Exercise 1.1]", "I like to eat ".concat(pie, "-flavored pie."));
console.log("===============Exercise 1.2================");
var isMark;
isMark = true;
console.log("[Exercise 1.2]", "".concat(isMark ? "Oh, hi Mark" : "Who are you?"));
console.log("===============Exercise 1.3================");
var integer = 6;
var float = 6.66;
var hex = 0xf00d;
var binary = 666;
var octal = 484;
var negZero = -0;
var actuallyNumber = NaN;
var largestNumber = Number.MAX_VALUE;
var mostBiglyNumber = Infinity;
// I can change any to number then member[0] can not get the string value in line 42
var members = [
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
var sequence = [1, 2, 3];
var animals = ["pangolin", "aardvark", "echidna", "binturong"];
var stringsAndNumbers = [1, "one", 2, "two", 3, "three"];
var allMyArrays = [
    sequence,
    animals,
    stringsAndNumbers,
];
console.log("Exercise 1.4", allMyArrays);
console.log("===============Exercise 1.5================");
var inventoryItem = ["fidget wibbit", 11];
// later we destructure it
var name1 = inventoryItem[0], qty = inventoryItem[1];
var msg = addInventory(name1, qty);
console.log("[Exercise 1.5]", msg);
function addInventory(name1, quantity) {
    return "Added ".concat(quantity, " ").concat(name1, "s to inventory.");
}
