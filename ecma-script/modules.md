# Modules

> Modules are part of ES6, probably not all the browsers support them. 
So if we wanna use them, we wanna use a transpiler (ex. babel). 
Or we can use a framework (React, Angular) which already provides a transpiler.


### Directory structure used
base_directory/  
├── modules  
│   ├── libA.js  
│   ├── libB.js  
│   └── libC.js  
├── App.js


### libA.js (module)

```javascript
// named export, becase we export a function called app
export function add(a, b) {
    return a + b;
}

export const substract = (a, b) {
    return a - b;
}


export let num = 1;
export const incrementNum = () => {
    num++;
}
```


### libB.js (module)

```javascript
export default (x, y) => {
    return x * y;
} // don't use semicolon here!!!

export let x = 1;
```


### libC.js (module)

```javascript
export default class car {
    constructor(name) {
        this.name = name;
    }
}
```


### App.js (componenr)

1. Import only few functions
    ```javascript
    import { add, substract } from './modules/libA';

    console.log(add(1, 3));
    console.log(substract(1, 3));
    ```

2. Import everything
    ```javascript
    import * as libA from './modules/libA';

    /**
    * If some other file has imported libA, there num will be incremented too.
    * Modules are singleton
    */
    libA.incrementNum();
    console.log(libA.num);
    ```

3. Import default exported function
    ```javascript
    import mult, { x } form './modules/libB';

    console.log(mult(2, 3));
    console.log(x); // 1
    ```

3. Import default exported class
    ```javascript
    import Car form './modules/libC';

    class App {
        constructor() {
            super();
            this.newCar = new Car("speedy");
        }

        // ...

        console.log(this.newCar.name); // speedy
    }
    ```