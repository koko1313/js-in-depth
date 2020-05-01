var a = 2;
var b = "2";

// does not compare the type
// first parses "b" to the type of "a" and then compares them
console.log(a == b); // true

// compares the type too
console.log(a === b); // false