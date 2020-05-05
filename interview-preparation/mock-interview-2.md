# Mock interview 2


### Sum of elements in array

```javascript
let arr = [1, 2, 5, 7];
```

**Solution:**

```javascript
let arr = [1, 2, 5, 7];

let sum = arr.reduce((a, b) => {
    return a + b;
});

console.log(sum);
```


### Create a function that add two numbers

```javascript
add(1, 2); // this should work
add(1)(2); // this should work too
```

**Solution:**

```javascript
let add = function(num1, num2) {
    if(num1 && num2) {
        return num1 + num2;
    } else {
        return function(num3) {
            return num1 + num3;
        }
    }
}
```


### Find the missing number

```javascript
const arr= [5, 1, 2, 7, 8, 3, 9, 6, 10]; // 1 munber is missing and the array is unsorted
```

**Solution:**

```javascript
const arr= [5, 1, 2, 7, 8, 3, 9, 6, 10];

const findMissing = function(arr) {
		arr = arr.sort(function(a, b) {
    		return a - b;
    });
    
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] + 1 != arr[i+1]) {
        		return arr[i] + 1;
        }
    }
}

console.log(findMissing(arr)); // 4
```


### What is the difference between the two functions

```javascript
function a() {

}

let b = function() {

}
```

**Answer:**

- `function a() {}` is a function declaration, `let b = function() {}` is a function expression.
- Function `a` will be hoisted, `b` won't be hoisted.


### Reverse the string

```javascript
let str = "i love javaScript";

// 'tpircSavaj evol i'
```

**Solution:**

```javascript
let str = "i love javaScript";
let arr = str.split("");
let reversedStr = arr.reverse().join("");
console.log(reversedStr);
```