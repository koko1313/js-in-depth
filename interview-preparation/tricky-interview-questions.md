# Tricky interview questions

### 1. Expected output
```javascript
console.log([]); // empty string
console.log([] + []); // empty string
console.log({} + []); // empty string
```


### 2. Expected output
```javascript
function a() {
    return 'hello';
}

const sentence = a `hi`; // tagged template
// const sentence = a('hi'); // the same

console.log(sentence); // hello
```


### 3. Take any webpage and make all it's content editable
```javascript
document.body.contentEditable = true;
```


### 4. Expected output
```javascript
function y() {
    console.log(this.length); // the length of the arguments
}

var x = {
    length: 5,
    method: function(y) {
        arguments[0](); // arguments.length
    }
};

x.method(y, 1); // 2
```


### 4. Expected output
```javascript
const x = "constructor";
console.log(x[x](01)); // 1

// explanation
x["constructor"]; // try to find property constructor of x
// x[x] == String()
// x[x](01) == String(01); // so the result will be 01 converted to string => 1
```


### 5. Expected output
```javascript
console.log(0.1 + 0.2); // 0.30000000000000004
// there is precision error, because decimals are in base(10) and the computer only understands base(2)
```


### 6. Expected output
```javascript
console.log(("hi").__proto__.__proto__.__proto__); // null

// explanation
console.log(("hi").__proto__); // String
console.log(("hi").__proto__.__proto__); // constructor of the Object
```


### 7. Create a function that returns total number of arguments passes (don't use loops)
```javascript
function x() {
    return arguments.length;
}
```


### 8. Change the code
> Change the code so `A.x().y().z()` should print `x`, `y` and `z`
```javascript
var A = {
    x: function() {
        console.log("x");
    },
    y: function() {
        console.log("y");
    },
    z: function() {
        console.log("z");
    }
}

A.x().y().z(); // should return x, y, z
```

Solution:

```javascript
var A = {
    x: function() {
        console.log("x");
        return this;
    },
    y: function() {
        console.log("y");
        return this;
    },
    z: function() {
        console.log("z");
        return this;
    }
}

A.x().y().z(); // should return x, y, z
```