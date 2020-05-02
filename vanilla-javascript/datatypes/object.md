# Object

1. Define an object

    ```javascript
    var x = new Object(); // define empty Object
    var x = {}; // second way to define empty Object
    ```

2. Object with properties

    ```javascript
    var x = {
        prop1: "prop1 value",
        prop2: "prop2 value"
    };

    // add a property to object
    x.prop3 = "prop3 value";
    ```

3. Functions are also objects

    ```javascript
    var Pizza = function() {
        this.crust = "thin"; // public property
        var hasCheese = true; // private property

        this.getHashCheese = function() {
            return hasCheese;
        }
    }

    var pizza1 = new Pizza();

    console.log(pizza1.crust); // thin

    console.log(pizza1.getHashCheese()); // true
    ```