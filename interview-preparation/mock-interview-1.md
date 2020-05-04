# Mock interview 1


### Create an array, containing the values of an object properties

```javascript
let x = {
    a: 1,
    b: 2
};
```

Solution:

```javascript
const xArr = [];

for(let i in x) {
    xArr.push(i);
}
```


### Reverse a string

```javascript
let x = "hi"; // it would be "ih"
```

Solution:

```javascript
console.log(x.split('').reverse().join(''));
```


### Method chaining

```javascript
let obj = {
    a: 1,
    b: 2,
    getA() {
        console.log(this.a);
    },
    getB() {
        console.log(this.b);
    }
};

obj.getA().getB(); // modificate the code so we can use this (method chaining)
```

Solution:

```javascript
let obj = {
    a: 1,
    b: 2,
    getA() {
        console.log(this.a);
        return this;
    },
    getB() {
        console.log(this.b);
        return this;
    }
};

obj.getA().getB();
```


### Add print method to Array

```javascript
[1, 2].print(); // this should return 1, 2
```

Solution:

```javascript
Array.prototype.print = function() {
	console.log(this.join(', '));
};

[1, 2].print(); // 1, 2
```


### Inheritance

```javascript
const a = function(x) {
    this.x = x;
};

const b = function(x, y) {
    this.y = y;
};

const newB = new b('x', 'y');

// change the code, so it would work
newB.getX();
newB.getY();
```

Solution:

```javascript
const a = function(x) {
    this.x = x;
};

const b = function(x, y) {
    this.y = y;
    a.call(this, x);
};

b.prototype.getX = function() {
  console.log(this.x);
}

b.prototype.getY = function() {
  console.log(this.y);
}

const newB = new b('x', 'y');

newB.getX();
newB.getY();
```


### Copy an object

```javascript
const obj = {
    a: 1
};

// const clone = ...

clone.a = 2;

console.log(obj.a); // it should not give 2
```

Solution:

```javascript
const obj = {
    a: 1
};

const clone = Object.assign({}, obj);

clone.a = 2;

console.log(obj.a); // 1
```


### Merge arrays

```javascript
const a = [1, 2, 3, 5, 7, 9];
const b = [1, 2, 2, 5, 6, 8, 8, 13, 100];
```

Solution:

```javascript
const a = [1, 2, 3, 5, 7, 9];
const b = [1, 2, 2, 5, 6, 8, 8, 13, 100];

const c = [...a, ...b];

console.log(c); // [1, 2, 3, 5, 7, 9, 1, 2, 2, 5, 6, 8, 8, 13, 100]
```


### Expected output

```javascript
const obj = {
    x: 1,
    getX() {
        const inner = function() {
            console.log(this.x);
        }
        inner();
    }
};

obj.getX();
```

Answer: `undefined`