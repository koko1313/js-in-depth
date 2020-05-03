# Constructors

```javascript
let Car = function(color) {
    this.color = color;
}

let redCar = new Car("red");
let blueCar = new Car("blue");

let orangeCar = Car("orange"); // undefined, because we call it as a regular function

console.log(window.color); // orange .. to prevent this, "use strict" mode
```