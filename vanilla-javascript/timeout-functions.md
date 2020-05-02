# Timeout functions

`setTimeout()` and `setInterval()` are part of WEB API, which means we call it as `window.setTimeout()`,
but actually, we can call it just like this `setTimeout()`, while we are in
the global scope

1. **setTimeout()** - happens only once
    - Set timeout
        
        ```javascript
        var timeoutId = setTimeout(function() {
            console.log("Greetings from setTimeout");
        }, 5000);
        ```

    - Clear the timeout
        
        ```javascript
        clearTimeout(timeoutId); 
        ```

    - The result will be `b c a` it's because `setTimeout()` is async function, so `console.log("b")` and `console.log("c")` are already in the execution stack
        
        ```javascript
        setTimeout(function() {
            console.log("a");
        }, 0);

        console.log("b");
        console.log("c");
        ```

2. **setInterval()** - happens many times (until gets stopped)
    - Set interval

        ```javascript
        var intervalId = setInterval(function() {
            console.log("Greetings from setInterval");
        }, 5000);
        ```

    - Clear the interval
    
        ```javascript
        clearInterval(intervalId); // clears the interval
        ```