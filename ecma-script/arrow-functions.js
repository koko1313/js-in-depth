// let square = a => a * a;

let square = (a) => { return a * a }; // same - recommended

// same as
// var square = function(a) {
//     return a * a;
// }

console.log(square(2));


let sayHi = () => { console.log("Hi") }; // without parameters


/**
 * Arrow functions use the parent's scope
 */
let x = function() {
    var that = this;
    this.val = 1;
    setTimeout(function() {
        this.val++; // this wont work because it salls THIS on setTimeout function
        // that.val++;
    }, 1);
};

// the same but using arrow functions
let x2 = function() {
    this.val = 1;
    setTimeout(() => {
        this.val++; // this works
        console.log(this.val);
    }, 1);
}