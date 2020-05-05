# Iterators

`Symbol.Iterator` is a property in iterable objects  


## for-of loop

On iterable structures we can use `for-of` loop

```javascript
let mySet = new Set([1, 2, 2, 2, 3]);

// for-of
for(let val of mySet) {
    console.log(val);
}
```

We can't use `for-of` loop on non-iterable structures

```javascript
let obj = {
    name: bob,
    age: 20,
    getName: function() {
        return this.name;
    }
}

// ERROR
for(let key of obj) {
    console.log(key)
}

// that's the way
for(let key in obj) {
    console.log(key)
}
```


## Get the iterator of an iterable structure

```javascript
let arr = [1, 2, 3, 4, 5];
let iterator = arr[Symbol.iterator](); // get the iterator of an iterable structure

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: 4, done: false}
console.log(iterator.next()); // {value: 5, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
```