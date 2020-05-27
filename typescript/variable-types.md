# Variable Types in TypeScript

### Variable Declarations
Declare variables using `let` and `const` (the ECMA Script 6 features)

### Variable Types

1. Primitive types
    ```typescript
    let isBeginner: boolean = true;
    let total: number = 0;
    let name: string = 'Some String';
    name = true; // error

    let n: null = null;
    let u: undefined = undefined;

    // null and udefined can be assigned to other types
    let isNew: boolean = null;
    let myName: string = undefined;

    // Intellisense - when write `name.`, it shows you only methods to strings. When write `total.` it shows you only methods to numbers
    ```
    
2. Array
    ```typescript
    // both are the same
    let list1: number[] = [1, 2, 3];
    let list2: Array<number> = [1, 2, 3];

    let person1: [string, number] = ['Kaloyan', 23];
    let person2: [string, number] = [23, 'Kaloyan']; // error
    let person3: [string, number] = ['Kaloyan', 23, 35]; // error
    ```

3. ENUMs
    ```typescript
    enum Color {Red, Green, Blue};
    let c: Color = Color.Green;
    console.log(c); // 1

    enum Color {Red = 5, Green, Blue};
    let c: Color = Color.Green;
    console.log(c); // 6
    ```
    
4. Any
    ```typescript
    let randomValue: any = 10;
    randomValue = true;
    randomValue = 'Random string ...';

    console.log(randomValue.name);
    randomValue();
    randomValue.toUpperCase();
    ```

5. Unknown
    ```typescript
    let randomValue: unknown = 10;

    console.log(randomValue.name); // error
    randomValue(); // error
    randomValue.toUpperCase(); // error
    (randomValue as string).toUpperCase(); // like type casting
    ```

6. Union of types
    ```typescript
    let multiType: number | boolean;
    multiType = 20;
    multiType = true;
    ```

    The difference between **union types** and `any` type is that `any` type does not have intellisense

7. Character traits
    ```typescript
    let a;
    a = 10;
    a = true;

    let b = 20;
    b = true; // error, because typescript it trying to help us
    ```