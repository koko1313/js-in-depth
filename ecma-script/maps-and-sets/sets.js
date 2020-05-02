const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // 1 will be overrided

mySet.delete(2); // delete single item
mySet.clear(); // clear the whole set


// make set of array
const arr = [1, 2, 3];
const setFromArray = new Set(arr);


// convert set into array
const arrayOfSet = [...setFromArray]; // using spread operator
const arrayOfSet2 = Array.from(arrayOfSet); // using Array.from()
console.log(arrayOfSet);


// for-of
for(let val of setFromArray) {
    console.log(val);
}