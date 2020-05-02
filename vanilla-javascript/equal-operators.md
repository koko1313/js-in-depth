# Equal operators

1. **==** - does not compare the type

    ```javascript
    var a = 2;
    var b = "2";

    // first parses "b" to the type of "a" and then compares them
    console.log(a == b); // true
    ```

2. **===** - compares the type too

    ```javascript
    var a = 2;
    var b = "2";

    console.log(a === b); // false
    ```