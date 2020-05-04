# Extending constructors

> In the typical OOP we have a base class and we can extend it to sub-class.  
> In JavaScript instead of class, we can extend a constructor.

```javascript
let Mammal = function(legs) {
    this.legs = legs;
}

Mammal.prototype = {
    walk() {
        return "walking";
    },
    sleep() {
        return "speeping";
    }
};


let Bat = function(legs, isVegetarian) {
    // like call super() in java
    Mammal.call(this, legs);
    this.isVegetarian = isVegetarian;
}

Bat.prototype = Object.create(Mammal.prototype); // but now we lose Bat's prototype, so we lose Bat's constructor too
Bat.prototype.constructor = Bat; // set the constructor back
Bat.prototype.fly = function() {
    return "flying";
}

let fruitBat = new Bat(4, true);

console.dir(fruitBat);
console.dir(fruitBat.sleep()); // sleeping
console.dir(fruitBat.fly()); // flying
```