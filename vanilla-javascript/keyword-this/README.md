# The keyword **this**

It has different values depending on where it is used:

- In a method, `this` refers to the **owner object**.

    ```javascript
    this.garage = {
        table: 'garage table',
        cleanTable() {
            console.log("cleaning " + this.table); // this.table is garage.table
        }
    }
    ```

- Alone, `this` refers to the **global object**.

    ```javascript
    this.table = "window table";
    ```

- In a function, `this` refers to the **global object**.

    ```javascript
    this.table = "window table";

    var cleanTable = function() {
        console.log(this.table); // window table
    }

    cleanTable();
    ```

- In a function, in strict mode, `this` is `undefined`.

    ```javascript
    "use strict"

    this.table = "window table";

    var cleanTable = function() {
        console.log(this.table); // Error: Cannot read property 'table' of undefined
    }

    cleanTable();
    ```

- In an event, `this` refers to the **element** that received the event.

[Example](./keyword-this.js)