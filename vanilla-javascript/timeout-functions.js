/**
 * The result will be
 * b c a
 * it's because setTimeout() is async function, so console.log("b") and console.log("c") 
 * are already in the execution stack
 */
setTimeout(function() {
    console.log("a");
}, 0);

console.log("b");
console.log("c");


// setTimeout happens once
var timeoutId = setTimeout(function() {
    console.log("Greetings from setTimeout");
}, 5000);

clearTimeout(timeoutId); // clears the timeout


// setInterval happens many times (until gets stopped)
var intervalId = setInterval(function() {
    console.log("Greetings from setInterval");
}, 5000);

clearInterval(intervalId); // clears the interval