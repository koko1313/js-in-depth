var add = function(a, b) {
    return a + b;
}

var multiply = function(a, b) {
    return a * b;
}

var calc = function(a, b, callback) {
    // check if callback is actually a function
    if(typeof callback === "function") {
        return callback(a, b);
    }
}

// pass function
console.log(calc(2, 3, add));
console.log(calc(2, 3, multiply));

// anonymous function
console.log(calc(2, 3, function(a, b) {return a - b}));