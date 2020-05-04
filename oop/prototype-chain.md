# Prototype chain

> Create sub-constructor from a constructor.


### Car, ToyCar and ToyTransformer

```javascript
const Car = function() {}; // empty constructor
Car.prototype = {
    print() {
        return "I am a Car";
    }
}

const ToyCar = function() {};
ToyCar.prototype = Object.create(Car.prototype);
ToyCar.prototype.print = function() {
    return "I am a ToyCar";
}

const ToyTransformer = function() {};
ToyTransformer.prototype = Object.create(ToyCar.prototype);
ToyTransformer.prototype.print = function() {
    return "I am a ToyTransformer";
}


const toyota = new Car();
const legoCar = new ToyCar();
const optimusPrime = new ToyTransformer();

console.log(toyota.print()); // I am a Car
console.log(legoCar.print()); // I am a ToyCar
console.log(optimusPrime.print()); // I am a ToyTransformer
```

> In the above example, `ToyTransformer` has `.print()` method on it's prototype.  
> This `.print()` method has another `.print()` method in it's prototype (`ToyCar.print()`).  
> And this `.print()` method has another `.print()` method in it's prototype (`Car.print()`).

```
ToyTransformer
├── __proto__
│   ├── print                  // ToyTransformer.print
│       ├── __proto__
│           ├── print          // ToyCar.print
│               ├── __proto__
│                   ├── print  // Car.print
```


### The same example, but now ToyTransformer doesn't have it's print method

> Here when we call `optimusPrime.print()`, it first looking for `ToyTransformer.print()`. If there is no `.print()` method, goes to the chain and looks for `ToyCar.print()` method.

```javascript
const Car = function() {}; // empty constructor
Car.prototype = {
    print() {
        return "I am a Car";
    }
}

const ToyCar = function() {};
ToyCar.prototype = Object.create(Car.prototype);
ToyCar.prototype.print = function() {
    return "I am a ToyCar";
}

const ToyTransformer = function() {};
ToyTransformer.prototype = Object.create(ToyCar.prototype);


const toyota = new Car();
const legoCar = new ToyCar();
const optimusPrime = new ToyTransformer();

console.log(toyota.print()); // I am a Car
console.log(legoCar.print()); // I am a ToyCar
console.log(optimusPrime.print()); // I am a ToyCar
```