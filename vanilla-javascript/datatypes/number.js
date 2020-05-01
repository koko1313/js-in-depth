var i = 10; // integer
var i = 0Xff; // hexdecimal integer
var i = 0.123; // floating points


console.log(1/0); // Infinity
console.log(1/-0); // -Infinity


var i = "02";
var k = Number(i); // convert to Number
console.log(k); // 2

var i = "Blah";
var k = Number(i);
console.log(k); // NaN

console.log(typeof(k)); // number - so NaN is actually number