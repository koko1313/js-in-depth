# Async and Await

> When there is async, we need to wait.  
> Why do we need to wait? Because JavaScript is non-blocking, so by default it doesn't wait for async.

> Example situation - we are in the cinema, but have forget our ticket.
> So the Wife goes home to bring the tickets. (promise)  
> When she is back, she is hungry, so we go for some popcorn. (promise)  
> Then she want butter on the popcorn...(promise)  
> And then we go into the cinema.


### With promises

> Nothing async here. Just an example, using promises

```javascript
console.log("person1: shows ticket");
console.log("person2: shows ticket");

const promiseWifeBringigTickets = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("ticket"); // i've got the ticket
    }, 3000);
});

const getPopcorn = promiseWifeBringigTickets.then((ticket) => {
    // the tickets arrive
    console.log('wife: I have the tickets');
    console.log('husband: we should go in');
    console.log('wife: no I am hungry');

    return new Promise((resolve, reject) => resolve(`${ticket} popcorn`));
});

// now the wife want butter
const getButter = getPopcorn.then((ticket) => {
    console.log('hisband: I got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: no I need butter on my popcorn');

    return new Promise((resolve, reject) => resolve(`${ticket} butter`));
});

getButter.then((ticket) => console.log(ticket));

console.log("person4: shows ticket");
console.log("person5: shows ticket");
```

The result will be
```
person1: shows ticket
person2: shows ticket
person4: shows ticket
person5: shows ticket
wife: I have the tickets
husband: we should go in
wife: no I am hungry
hisband: I got some popcorn
husband: we should go in
wife: no I need butter on my popcorn
ticket popcorn butter
```


### Using async/await

> `async` functions always returns a promise. `await` can only be used inside an async function's body

```javascript
console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async () => {
    const promiseWifeBringigTickets = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));

    const getButter = new Promise((resolve, reject) => resolve('butter'));

    // execution wait here (because we use await)
    let ticket = await promiseWifeBringigTickets;

    console.log(`wife: I have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no I am hungry');

    let popcorn = await getPopcorn;

    console.log(`hisband: I got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: no I need butter on my popcorn');

    let butter = await getButter;

    console.log(`husband: I got some ${butter} on popcorn`);

    return ticket;
};

preMovie().then((message) => console.log(`person3: shows ${message}`)); // person3: shows ticket

console.log("person4: shows ticket");
console.log("person5: shows ticket");
```

The result will be
```
person1: shows ticket
person2: shows ticket
person4: shows ticket
person5: shows ticket
wife: I have the tickets
husband: we should go in
wife: no I am hungry
hisband: I got some popcorn
husband: we should go in
wife: no I need butter on my popcorn
husband: I got some butter on popcorn
person3: shows ticket
```


> Now let we change the situation a bit.
> Wife wants candy and coke too, but for example you are going to get popcorn and she 
> is going to get candy and coke.  
> So when all this job is done and we have popcorn, candy and coke, then we shows the ticket

```javascript
console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async () => {
    const promiseWifeBringigTickets = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));

    const getCandy = new Promise((resolve, reject) => resolve('candy'));

    const getCoke = new Promise((resolve, reject) => resolve('coce'));

    let ticket = await promiseWifeBringigTickets;

    // do the things parallel
    let [popcorn, candy, coke]= await Promise.all([getPopcorn, getCandy, getCoke]);

    console.log(`${popcorn} ${candy} ${coke}`);

    return ticket;
};

preMovie().then((message) => console.log(`person3: shows ${message}`)); // person3: shows ticket

console.log("person4: shows ticket");
console.log("person5: shows ticket");
```

The result will be
```
person1: shows ticket
person2: shows ticket
person4: shows ticket
person5: shows ticket
popcorn candy coce
person3: shows ticket
```


### Error handling when use async/await

> What if the wife never comes back with the tickets and the husband gives up after an hour waiting

```javascript
console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async () => {
    const promiseWifeBringigTickets = new Promise((resolve, reject) => {
        setTimeout(() => reject('ticket'), 3000);
    });

    let ticket;

    try {
        ticket = await promiseWifeBringigTickets;
    } catch(e) {
        ticket = 'sad face';
    }

    return ticket;
};

preMovie().then((message) => console.log(`person3: shows ${message}`)); // person3: shows ticket

console.log("person4: shows ticket");
console.log("person5: shows ticket");
```

The result will be
```
person1: shows ticket
person2: shows ticket
person4: shows ticket
person5: shows ticket
person3: shows sad face
```