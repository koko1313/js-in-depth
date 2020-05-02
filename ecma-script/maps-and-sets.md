# Maps and Sets

- [Maps](./maps.js)
    - Key-value pairs
    - Can not contain duplicate keys, but can contain duplicate values

    ```javascript
    const map = new Map();

    map.set("1", "One");
    map.set("2", "Two");
    map.set("3", "Three");
    map.set("1", "Eleven??"); // the item with key "1" is overrided

    map.delete("2"); // delete an entity in map


    // for-of
    for(let [key, value] of map.entries()) {
        console.log(key, value);
    }


    // spread map to array
    const arr = [...map];
    console.log(arr);
    ```
- [Sets](./sets.js)
    - Refference datatype
    - Can not contain duplicate values
    - Doesn't have ordering

    ```javascript
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
    ```