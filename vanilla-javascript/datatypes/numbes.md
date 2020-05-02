# Numbers

1. Integer
    ```javascript
    var i = 10; // integer
    var i = 0Xff; // hexdecimal integer
    ```

2. Floating point
    ```javascript
    var i = 0.123;
    ```

3. **+infinity / -infinity**
    ```javascript
    console.log(1/0); // Infinity
    console.log(1/-0); // -Infinity
    ```

4. Convert
    ```javascript
    var i = "02";
    var k = Number(i); // convert to Number
    console.log(k); // 2

    var i = "Blah";
    var k = Number(i);
    console.log(k); // NaN (Not a Number)
    ```

5. NaN (Not a Number)
    ```javascript
    var i = "Blah";
    var k = Number(i);
    console.log(k); // NaN

    console.log(typeof(k)); // number - so NaN is actually number
    ```