# Interfaces

### Without interface

```typescript
function fullName(person: {firstName: string, lastName: string}) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}

fullName(p);
```

### With interface

```typescript
interface Person {
    firstName: string;
    secondName?: string;
    lastName: string;
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.secondName} ${person.lastName}`);
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}

fullName(p);
```