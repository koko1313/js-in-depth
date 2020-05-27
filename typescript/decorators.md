# Decorators

> Decorators are an experimental feature that may change in future releases.

To enable decorators, we must enable `experimentalDecorators` compiler option in `tsconfig.json`:

```json
{
	"compilerOptions": {
		"target": "ES5",
		"experimentalDecorators": true
	}
}
```

### Class Decorators

> The class decorator is applied to the constructor of the class and can be used to observe, modify or replace a class definition.

Override the constructor example:

```typescript
function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

console.log(new Greeter("world").property); // property
console.log(new Greeter("world").newProperty); // new property
console.log(new Greeter("world").hello); // override
```

### Method Decorators

> The method decorator is applied to the *Property Descriptor* for the method and it ca be used to observe, modify or replace a method definition.

Override the method body example:

```typescript
function g() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // descriptor.value is the body of the method (the method method() in this case)
        descriptor.value = () => {
            console.log("overwritten");
        }
    }
}

class C {
    @g()
    method() {
        console.log("method called");
    }
}

new C().method(); // overwritten
```

TODO: https://youtu.be/bRAcWk9S-6g?t=412