let car = function(model) {
    this.model = model;
}

// add function to trototype
car.prototype.getModel = function() {
    return this.model;
}

let toyota = new car("Toyota");

// The object toyota now have .getModel() too. 
// This is called prototypal inheritance.
console.log(toyota.getModel());