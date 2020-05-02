# Prototypal Inheritance

1. Add a method to the prototype
    ```javascript
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
    ```

2. Add **.print()** method to Array prototype
    ```javascript
    var arr = [2, 4, 6];

    // Add .print() method to Array prototype
    Array.prototype.print = function() {
        for(var i = 0; i < this.length; i++) {
            console.log("Element: " + this[i]);
        }
    }

    arr.print();
    ```