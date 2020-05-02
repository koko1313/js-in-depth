# Immediately invoked function expression (IIFE)

1. Functions returning some result

    ```javascript
    (function(num) {
        return num;
    })(5);

    // another way
    (function(num) {
        return num;
    }(5));
    ```

2. Functions that don't return resul can be like this
    ```javascript
    // all the fourth are the same
    !function() {console.log("Hey")}();
    ~function() {console.log("Hey")}();
    -function() {console.log("Hey")}();
    +function() {console.log("Hey")}();
    ```