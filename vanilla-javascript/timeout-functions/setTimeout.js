// setTimeout happens once
var timeoutId = setTimeout(function() {
    console.log("Greetings from setTimeout");
}, 5000);

clearTimeout(timeoutId); // clears the timeout


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