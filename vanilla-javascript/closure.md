# Closure

```javascript
var calculator = function() {
    var two = 2;

    // returns an object, containing functions
    return {
        addTwo: function(number) {
            console.log(number + two);
        },
        removeTwo: function(number) {
            console.log(number - 2);
        }
    }
}

// calc1 now contains the returned object with functions and as a CLOSURE contains the variable "two"
var calc1 = calculator();

calc1.addTwo(4); // 6
calc1.removeTwo(10); // 8

console.dir(calc1); // the object
```