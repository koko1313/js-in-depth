# Static class methods

### Explanation

```javascript
class Car {
    // static method
    static comparePrice() {
        console.dir(this);
    }

    // instance method
    getColor() {
        console.dir(this);
    }
}

Car.comparePrice(); // class Car. It has comparePrice() method but it's not in the prototype. In the prototype has getColor() method

const newCar = new Car();
newCar.getColor(); // Car
```


### Example

> **static** method doesn't use **this** to access the properties.

```javascript
class Car {
    constructor(color, price) {
        Object.assign(this, {color, price});
    }

    static comparePrice(car1, car2) {
        return Math.abs(car1.price - car2.price);
    }

    getColor() {
        return this.color;
    }
}

const redCar = new Car("red", 100);
const blueCar = new Car("blue", 102);

console.log(redCar.getColor()); // red
console.log(Car.comparePrice(redCar, blueCar)); // 2
```


### Static methods when extending class

```javascript
class Car {
    constructor(price) {
        this.price = price
    }

    static sellCar(car) {
        return `selling for ${car.price}`;
    }
}

class Toyota extends Car {
    constructor(price) {
        super(price);
    }

    static sellCar(car) {
        return `Toyota ${super.sellCar(car)}`;
    }
}

// camry is a model of toyota
const camry = new Toyota(100);

console.log(Toyota.sellCar(camry)); // Toyota selling for 100
```