# Object.assign()

> `Object.assign()` - copy properties from one object into another.

```javascript
let toyota = {
    drive() {
        return "driving toyota";
    },
    break() {
        return "breaking toyota";
    }
};

// camry is a model of toyota
let camry = {
    wifi() {
        return "uding wifi";
    },
    drive() {
        return "driving camry";
    }
};

// copy all the methods from toyota to camry
// the method drive() in camry will be overrided with the method drive() from toyota
Object.assign(camry, toyota);

console.log(camry.drive()); // driving toyota
```


```javascript
let toyota = {
    drive() {
        return "driving toyota";
    },
    break() {
        return "breaking toyota";
    }
};

// copy only the properties, NOT the prototype
let copyToyota = Object.assign({}, toyota);

console.dir(copyToyota);
```