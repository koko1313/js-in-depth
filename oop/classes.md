# Classes

> Classes are not like in the other languages.  
> JavaScript classes are nothing but **function constructors** width **prototype methods**.  
> Internaly **classes** are **functions**.

```javascript
class Car {
    constructor(color) {
        this.color = color;
    } // no comma here
    drive() {
        console.log("driving");
    }
} // no semicolon here!

console.dir(Car); // it has a prototype, that have a constructor which is Car

console.log(typeof(Car)); // function
```

> Bellow code shows absolutely the same, but using functions. Actually when using classes, internaly javascript uses functions.

```javascript
// immediately invoked function
let Car = (function() {
    // function constructor
    let _car = function(color) {
        this.color = color;
    }

    _car.prototype.drive = function() {
        console.log("driving");
    }

    return _car;
})();

console.dir(Car);
```