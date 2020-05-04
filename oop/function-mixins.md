# Function Mixins

> **Mixins** - Original concept came from an icecream shop, where it was providing customers this option to add mixins in their icecreams (toppings).  
> In programming, **Mixins** are pieces of code that you actually add to your objects to extend them.


### How to build a Mixin

> If we wanna build an JavaScript engineer, we need two Mixins - *JavaScript skill* and *Engineer degree*.

```javascript
const jsSkill = {
    knowsJS() {
        return true;
    }
};

const engineeringDegree = {
    hasDegree() {
        return true;
    }
};

const jsEngineer = Object.assign({}, jsSkill, engineeringDegree); // jsEngineer now have all the functions from jsSkill and engineerDegree
```

> The reason why the first parameter of `Object.assign()` is `{}` is that want to create a new object.


### Facotory function

```javascript
// a factory function with closure
let Car = function(color) {
    let moving = false; // moving stays in closure
    return Object.assign({}, {
        color: color,
        drive() {
            moving = true;
            return this; // allows methos chaining
        },
        isMoving() {
            return moving;
        }
    });
};

let redCar = Car("red");

console.log(redCar.drive().isMoving());
```


### Function Mixins

> **Function Mixins** are **factory functions** that takes an object as an argument and it would copy the methods that are inside the mixins into this object and returns a new object.

```javascript
const humanFactory = function(obj) {
    let isCrying = false;

    return Object.assign({}, obj, {
        cry() {
            isCrying = true;
            return this; // allows methos chaining
        },
        isCrying() {
            return isCrying;
        }
    });
}

const flyFactory = function(obj) {
    let isFlying = false;

    return Object.assign({}, obj, {
        fly() {
            isFlying = true;
            return this; // allows methos chaining
        },
        isFlying() {
            return isFlying;
        }
    });
}

// build a superman
const superman = humanFactory(flyFactory({}));

console.log(superman.fly().cry().isCrying());
```