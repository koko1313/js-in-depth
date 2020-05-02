# Scope chain

```javascript
var global = "global";

function func() {
    var global = "redefined global";

    console.log(global); // redefined global
}

func();

console.log(global); // global
```