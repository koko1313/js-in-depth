# Methods .call(), .apply and .bind

1. **.call()**. Calls function for an object

    ```javascript
    var obj = {num: 2}

    function addToThis(a, b) {
        return this.num + a + b;
    }

    // call "addToThis" for "obj", passing "3" and "5" as parameters
    console.log(addToThis.call(obj, 3, 5));
    ```

2. **.apply()**. The only difference between call and apply is this - apply gets the parameters as array
    
    ```javascript
    var obj = {num: 2}

    function addToThis(a, b) {
        return this.num + a + b;
    }

    var params = [3, 5];
    console.log(addToThis.apply(obj, params));
    ```

3. **.bind()**. Creates a new function that has the object to it

    ```javascript
    var obj = {num: 2}

    function addToThis(a, b) {
        return this.num + a + b;
    }

    var addToThisWithAttachedObj = addToThis.bind(obj); // First attach the object to the function
    console.log(addToThisWithAttachedObj(3, 5)); // and then call it
    ```



