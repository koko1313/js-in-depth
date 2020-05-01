var car = function(model) {
    this.model = model;
}

// add function to trototype
car.prototype.getModel = function() {
    return this.model;
}

var toyota = new car("Toyota");

// The object toyota now have .getModel() too. 
// This is called prototypal inheritance.
console.log(toyota.getModel());


var arr = [2, 4, 6];


// Add .print() method to Array prototype
Array.prototype.print = function() {
    this.forEach(element => {
        console.log("Element: " + element);
    });
}

arr.print();