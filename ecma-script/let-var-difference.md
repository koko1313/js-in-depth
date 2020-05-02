# Difference between let and var

| var                                                   | let               |
|-------------------------------------------------------|-------------------|
| in JavaScript from the beginning                      | introduced in ES6 |
| declaration gets hoisted in the top of the function   | -                 |
| functional scope                                      | block scope       |

1. **var**
    ```javascript
    // j declaration gets hoisted here

    if(true) {
        console.log(j); // undefined, because it's declaration gets hoisted but the value assotiation does not

        var j = 2;
    }

    console.log(j); // 2
    ```

2. **let**
    ```javascript
    if(true) {
        console.log(i); // error

        let i = 1;

        console.log(i); // 1
    }

    console.log(i); // error
    ```