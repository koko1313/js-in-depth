# Object.create()


> `Object.create()` is an object constructor that create objects.


```javascript
const myObject = Object.create(Object.prototype);

const myLiteral = {}; // internaly calls Object.create()

const noProto = Object.create(null); // object wirh no prototype
```


```javascript
const Car = function(color) {
    this.color = color;
}

const car1 = new Car("red");

const car2 = Object.create(Car.prototype); // the same (without property pass) but using Object.create()
```


### Constructor extending

> Compared to classically inheritance when you extend one class from another you basically copy all the methods from the base class to the subclass.  
> **Here you just set a reference from the subclass to the base class. So it's a prototype reference so you don't copy anything.**

```javascript
const Car = function(color) {
    this.color = color;
}

// add a method to Car prototype
Car.prototype = {
    getColor() {
        return this.color;
    }
}


const ToyCar = function() {

}

ToyCar.prototype = Object.create(Car.prototype); // ToyCar extends Car

const legoCar = new ToyCar();

console.log(legoCar instanceof ToyCar); // true
console.log(legoCar instanceof Car); // true
console.log(legoCar instanceof Object); // true

console.log(ToyCar.prototype.isPrototypeOf(legoCar)); // true
console.log(Car.prototype.isPrototypeOf(legoCar)); // true
console.log(Object.prototype.isPrototypeOf(legoCar)); // true
```