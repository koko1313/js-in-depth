# JavaScript in Depth

## Vanilla JavaScript

1. [Datatypes in JavaScript](./vanilla-javascript/datatypes)
    - [String](./vanilla-javascript/datatypes/string.js)
    - [Number](./vanilla-javascript/datatypes/number.js)
        - Special values:
            - NaN (Not a Number)
            - Infinity (positive infinity)
            - -Infinity (negative infinity)
            - +0/-0
    - [Boolean](./vanilla-javascript/datatypes/boolean.js)
    - [Object](./vanilla-javascript/datatypes/object.js)
        - Functions are also objects
    - [Array](./vanilla-javascript/datatypes/array.js)
    - [null and undefined](./vanilla-javascript/datatypes/null-and-undefined.js)
        - undefined - undefined value of property
        - null - property does exist, but holds no value

2. [Equal operators](./vanilla-javascript/equal-operators.js)

3. [Scope chain](./vanilla-javascript/scope-chain.js)

4. [Prototypal Inheritance](./vanilla-javascript/prototypal-inheritance.js)

5. [Timeout functions](./vanilla-javascript/timeout-functions.js)
    - `setTimeout()` and `setInterval()` are part of WEB API, which means we call it as `window.setTimeout()`,
    but actually, we can call it just like this `setTimeout()`, while we are in
    the global scope
    - `setTimeout()` happens only once
    - `setInterval()` happens many times (until gets stopped)

6. [Closure](./vanilla-javascript/closure.js)

7. [Call, apply and bind](./vanilla-javascript/call-apply-bind.js)

8. [Method chaining](./vanilla-javascript/method-chaining.js)

9. [Immediately Invoked Function Expression (IIFE)](./vanilla-javascript/immediately-invoked-function-expression.js)


## ECMA Script

1. [Difference between let and var](./ecma-script/let-var-difference.js)

    | var                                                   | let               |
    |-------------------------------------------------------|-------------------|
    | in JavaScript from the beginning                      | introduced in ES6 |
    | declaration gets hoisted in the top of the function   | -                 |
    | functional scope                                      | block scope       |

2. [Constants](./ecma-script/constants.js)

3. [Promises](./ecma-script/promises.js)