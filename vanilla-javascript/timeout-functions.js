/**
 * The result will be
 * b c a
 * it's because setTimeout() is async function, so console.log("b") and console.log("c") are already in the stack
 */
setTimeout(function() {
    console.log("a");
}, 0);

console.log("b");
console.log("c");