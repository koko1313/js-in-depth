var obj = {num: 2}

function addToThis(a, b) {
    return this.num + a + b;
}


// call "addToThis" for "obj", passing "3" and "5" as parameters
console.log(addToThis.call(obj, 3, 5));


// The only difference between call and apply is this - apply gets the parameters as array
var params = [3, 5];
console.log(addToThis.apply(obj, params));


// First attach the object to the function
var addToThisWithAttachedObj = addToThis.bind(obj);
// and then call it
console.log(addToThisWithAttachedObj(3, 5));