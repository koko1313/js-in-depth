# Object.setPrototypeOf()

> `Object.setPrototypeOf(destinationObject, souceObject)` takes one object's method and make it available to another object.

```javascript
let toyota = {
    drive() {
        return "driving toyota";
    }
};

// camry is a model of toyota
let camry = {
    drive() {
        return `${super.drive()} camry`; // call super
    },
    wifi() {
        return 'using wifi';
    }
}

console.dir(camry); // it's parent (prototype) will be Object (Object's prototype)
Object.setPrototypeOf(camry, toyota); // set camry's prototype to toyota's prototype
console.dir(camry); // it's parent (prototype) will be toyota (toyota's prototype)

console.log(camry.drive()); // driving toyota camry
console.log(camry.wifi()); // using wifi
```