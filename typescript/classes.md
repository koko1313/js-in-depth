# Classes

### Class

```typescript
class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let empl1 = new Employee('Kaloyan');
console.log(empl1.employeeName);
emp1.greet();


class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log(`Manager deligating tasks`);
    }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
```

### Access Modifiers

> By default each class member is `public`.

Access Modifiers:
- public
- private
- protected

```typescript
class Employee {
    private employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let empl1 = new Employee('Kaloyan');
console.log(empl1.employeeName); // error
emp1.greet();
```