# Type conversions

1. JavaScript always do the easier conversion so:
    ```javascript
    console.log(2 + '2'); // 22 because it's easier to convert number to string than string to number

    console.log(2 + 2 + '2'); // 42 because it goes from left to right
    // (2 + 2) + '2' = 4 + '2' = 42

    console.log(2 + true); // 3 because it's easier to convert boolean (true=1/false=0) to number than number to boolean. Its hard to conver 5 to boolean

    console.log(2 + true + '2'); // (2 + true) + '2' = 3 + '2' = 32

    console.log(true + '2'); // true 2, because it's easier to convert boolean to string than string to boolean

    console.log(undefined + 2); // NaN
    console.log(null + 2); // 2
    ```

2. Explicit parsing
    - String to number
        ```javascript
        console.log(Number('2')); // 2 as a number
        console.log(Number('Hello')); // NaN
        ```

    - Number to boolean - *only 0 is false*
        ```javascript
        console.log(Boolean(1)); // true
        console.log(Boolean(5)); // true
        console.log(Boolean(0)); // false
        ```

    - String to boolean - *only empty string is false*
        ```javascript
        console.log(Boolean('Hello')); // true
        console.log(Boolean('')); // false
        console.log(Boolean('false')); // true   
        ```

    - `null` and `undefined` are always `false`
        ```javascript
        console.log(Boolean(undefined)); // false
        console.log(Boolean(null)); // false
        ```

    - Objects are always `true`
        ```javascript
        console.log(Boolean([])); // true
        console.log(Boolean({})); // true
        ```