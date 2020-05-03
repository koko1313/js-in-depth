# NPM (Node Package Manager)

[npm website](https://www.npmjs.com/)

1. `npm init`
> To use NPM on our project, we have to run the command `npm init` that creates `package.json`

```
npm init
```


2. `npm install <dependency>`
> Use `--save` flag to add the dependency in `package.json` file too
    
- Install the newest version
    ```
    npm install jquery --save
    ```

- Install specific version
    ```
    npm install jquery@3.3.0 --save
    ```

- Install dependency only in development 
    ```
    npm install jquery --save-dev
    ```


## Import installed dependency in our .js file

```javascript
// if we use babel
import { $ } from 'jQuery';

// without babel
$ = require('jQuery'); // it looks for it in node_modules folder
```