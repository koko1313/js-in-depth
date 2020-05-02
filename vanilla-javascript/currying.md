# Currying

We gonna use [**closures**](./closure.md) to build **currying** functions.

1. Base example

    ```javascript
    var add = function(a) {
        return function(b) {
            return a + b;
        }
    }

    var addToFive = add(5); // a is only passed
    // so
    // addToFive = function(b) {
    //     return 5 + b;
    // }

    console.log(addToFive(1)); // 6
    ```

2. Another example
    ```javascript
    var avg = function(...n) {
        let total = 0;
        for(let i = 0; i < n.length; i++) {
            total += n[i];
        }
        return total / n.length;
    };

    var spiceUp = function(fn, ...n) {
        return function(...m) {
            return fn.apply(this, n.concat(m));
        }
    }

    var doAvg = spiceUp(avg, 1, 2, 3);
    // so
    // doAvg = function(...m) {
    //     return avg.apply(this, ...[1, 2, 3].concat(m));
    // }

    console.log(doAvg(4, 5, 6));
    ```

3. Crazy example
    ```javascript
    var sayWhat = function(a) {
        return function(b) {
            return function(c) {
                console.log("saying " + a + " to " + b + " using " + c);
            }
        }
    }

    sayWhat("hello")("friends")("javascript"); // saying hello to friends using javascript

    var sayHi = sayWhat("hi");
    var sayHiToMe = sayHi("me");
    var sayHiToMeUsingNothing = sayHiToMe("nothing"); // saying hi to me using nothing;
    ```