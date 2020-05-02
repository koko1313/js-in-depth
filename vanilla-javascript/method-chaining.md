# Method chaining

```javascript
// object that behaves like a class
var calculator = function() {
    var result = 0;

    this.add = function(num) {
        result += num;
        return this; // this is the point, by returning the current object, we can call the functions again
    }

    this.substract = function(num) {
        result -= num;
        return this; // this is the point
    }

    this.print = function() {
        console.log(result);
    }
}


var calc = new calculator();

calc.add(3).substract(2).print();
```