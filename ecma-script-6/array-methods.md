## Array methods

1. `.push()` and `.pop()`

    ```javascript
    // push element to array
    arr.push(1);
    arr.push('a');

    // pop the last element from the array
    arr.pop();
    ```

2. `Array.flat()`

    ```javascript
    const matrix = [[1, 2, 3], [4, 5, 6]];

    console.log(matrix.flat(1)); // [1, 2, 3, 4, 5, 6]
    ```

    ```javascript
    const matrix = [[1, 1], [1, [[[[[1]]]]]]];

    console.log(matrix.flat(Infinity)); // [1, 1, 1, 1]
    ```

2. `Array.reduce()`

    ```javascript
    const arr = [1, 2, 3, 4];

    console.log(arr.reduce((a, b) => a + b)); // 10
    ```

3. `Array.reduceRight()`

    ```javascript
    const strs = ['t', 's', 'e', 'b'];

    console.log(strs.reduce( (c, v) => c + v )); // tseb
    console.log(strs.reduceRight( (c, v) => c + v )); // best
    ```

4. `Array.map()` and `Array.flatMap()`

    ```javascript
    const nums = [1, 2, 3];
    const strs = ['one', 'two', 'three'];

    console.log(nums.map( (val, index) => [val, strs[index]] )); // [[1, "one"], [2, "two"], [3, "Three"]]

    console.log(nums.flatMap( (val, index) => [val, strs[index]] )); // [1, "one", 2, "two", 3, "three"]
    ```

5. `Array.copyWithin()`

    ```javascript
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    nums.copyWithin(0);
    console.log(nums); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    ```

    ```javascript
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    nums.copyWithin(2); // 2 is the staring index
    console.log(nums); // [0, 1, 0, 1, 2, 3, 4, 5, 6, 7]
    ```

    ```javascript
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    nums.copyWithin(0, 3); // 0 is the target index and start copy from index 3
    console.log(nums); // [3, 4, 5, 6, 7, 8, 9, 7, 8, 9]
    ```

    ```javascript
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    nums.copyWithin(0, 3, 5); // 0 is the target index and start copy from index 3 and stop copy to index 5
    console.log(nums); // [3, 4, 2, 3, 4, 5, 6, 7, 8, 9]
    ```

6. `Array.from()`

    ```javascript
    let str = "1234";

    // using spread operator
    console.log([...str]); // ["1", "2", "3", "4"]

    // using Array.from()
    console.log(Array.from(str)); // ["1", "2", "3", "4"]
    ```

    ```javascript
    const fromScratch = Array.from({length: 5}, (value, index) => value); // the value is undefined
    console.log(fromScratch); // [undefined, undefined, undefined, undefined, undefined]
    ```

    ```javascript
    const fromScratch = Array.from({length: 5}, (value, index) => index);
    console.log(fromScratch); // [0, 1, 2, 3, 4]
    ```