# Generators

## yield

```javascript
// function* generator() { // that's valid too
function *generator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let iterator = generator();

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: 4, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
```

> When call `.next()` for the first time, it generates only the first value - 2, 3 and 4 are still not generated.

```javascript
function *infiniteMaker() {
    let i = 0;
    while(true) {
        yield i;
        i++;
    }
}

let iterator = infiniteMaker();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// etc ... everytime generate a new value
```

```javascript
function *infiniteMaker() {
    yield 1;
    yield 2;
    return "hello";
    yield 4;
}

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: "hello", done: true}
console.log(iterator.next()); // {value: undefined, done: true}
```