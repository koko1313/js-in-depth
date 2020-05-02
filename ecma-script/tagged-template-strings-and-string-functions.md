# Tagged template strings and string functions

1. Line break
    ```javascript
    console.log('hello\n' + 'world');
    console.log(`hello
    world`);
    ```

2. Interpolation
    ```javascript
    let name = 'bond';
    console.log(`my name is ${name}, James ${x}`);
    ```

3. Tagged templates
    ```javascript
    let tagged = (strArray, ...vals) => {
        console.log(strArray); // ["adding ", " and ", " gives me ", ""]
        console.log(vals); // [1, 2, 3]
    }

    let one = 1;
    let two = 2;

    tagged`adding ${one} and ${two} gives me ${one + two}`;
    ```

4. ES6 string functions
    ```javascript
    console.log('hello world'.startsWith('hell')); // true
    console.log('hello world'.endsWith('rld')); // true
    console.log('hello world'.includes('wo')); // true
    console.log('hello world'.repeat('3')); // hello worldhello worldhello world

    console.log(String.raw`Not a new line: \n`); // Not a new line: \n - won't escape the \n
    ```