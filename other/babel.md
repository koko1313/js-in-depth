# Babel


### What is Babel
> Babel is javascript compiler (transpiler).  
> It's taking the newest version on javascript and convert them to ES5.  
> So we can use the newest features in javascript and they will be converted to ES5,
> so they gonna work on all the browsers


### Add Babel to our project
> To add Babel to our project, we need `npm`


1. Install `babel-cli` and `babel-preset-env`
```
npm install --save-dev babel-cli babel-preset-env
```


2. Add transpiling script
In `package.json` in `scripts` section add
```
"build": "babel src -d transpiled"
```

- `src -d` is the directory, where we will write the newest javascript
- `transpiled` is the folder where the code will be traspiled


3. Add `.babelrc` file with Babel settings in root directory
```
{
    "presets": ["env"]
}
```


4. Run the script
```
npm run build
```