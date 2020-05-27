# Functions

### Example

```typescript
function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(5, 10);
add(5, '10'); // error
```

### Optional parameters

```typescript
// num2 is optional
function add(num1: number, num2?: number): number {
    if (num2) {
        return num1 + num2;
    } else {
        return num1;
    }
}

add(5, 10);
add(5);
```

### Default parameters

```typescript
// num2 has default value of 10
function add(num1: number, num2: number = 10): number {
    return num1 + num2;
}

add(5, 10);
add(5);
```